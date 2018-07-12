import { Component, OnInit, OnDestroy } from '@angular/core';
import { MonitoringService } from '../../monitoring.service';
import { WmsService } from './wms.service';
import { WmsRealtimeDataInt } from '../../../../models/realtime-data.model';
import { ResolveParamsService } from '../../../../services/resolve-params.service';
import { WMS, BASE_URL } from '../../../../config/config';
import { HttpClient } from '@angular/common/http';
import { Subscription } from 'rxjs/Subscription';
import { Observable } from 'rxjs/Rx';
import { LoaderComponent } from '../../../../components/loader/loader.component';
import * as _ from 'lodash';
@Component({
  selector: 'app-wms',
  templateUrl: './wms.component.html',
  styleUrls: ['./wms.component.css'],
  providers: [WmsService]
})
export class WmsComponent implements OnInit, OnDestroy {
  wms_devices: { device_id: string }[] = [];
  firstId = null;
  dataLoaded: boolean = false;
  realtimeData: WmsRealtimeDataInt;
  averagedData: any;
  windrose_data: any;
  dev_rec_subs: Subscription;
  data_on_device_select_subs: Subscription;
  refreshDisabled: boolean = false;
  constructor(
    private _monS: MonitoringService,
    private _httpClient: HttpClient,
    private _wmsService: WmsService,
    private _rpService: ResolveParamsService
  ) {
    console.log('wms component')
  }

  ngOnInit() {
    this.get_wms_list();
  }

  ngOnDestroy() {
    this.dev_rec_subs.unsubscribe();
    if(this.data_on_device_select_subs){
      this.data_on_device_select_subs.unsubscribe();   
    }
  }

  get_wms_list() {
    //##################################################################
    //        async, on app reload
    //##################################################################
    this.dev_rec_subs = this._monS.dev_rec_sub.subscribe((devices) => {
      this.restructure(devices);
    });
    //##################################################################
    //not async | passing already fetched devices from monitoring service
    //##################################################################
    this.restructure(this._monS.devices);
  }

  //###################################
  //     RESTRUCTURE
  //###################################
  restructure(devices) {
    if (devices.length > 0) {
      let wms_list = devices.filter((el) => {
        if (el['device_name'] === WMS) {
          return true;
        }
      });
      this.wms_devices = wms_list[0].device_ids.map((el) => {
        return { device_id: el };
      });

      this.firstId = this.wms_devices[0].device_id;// assign first id to be default selected
      this.getApiData(this.firstId);
    }
  }

  refresh() {
    this.refreshDisabled = true;
    this.data_on_device_select_subs.unsubscribe();// unsubscribe from previous requests
    this.getApiData(this.firstId);
  }
  getApiData(device_id: string) {
    // REQ TYPE=1 realtime polling every 5sec
    this.data_on_device_select_subs = Observable.timer(0, 5000).switchMap(() => this._wmsService.get_realtime_poll_data(device_id))
      .subscribe((response: { lastUpdated: string, parameters: string[] }) => {
        if (response['success']) {
          this.refreshDisabled = false;
          // resolve '1:45' type of parameters data
          this.realtimeData = this._wmsService.resolve_realtime_data(response['msg']);
          this.dataLoaded = true;
        }
      });
    // REQ TYPE=2 one time request to get average data of selected days range
    this._wmsService.get_averaged_data(device_id).subscribe((response) => {
      //resolving raw type data like '1:45' for temperature into 'temperature:45' type
      this.averagedData = this._wmsService.resolve_average_data(response['msg']);
      this._wmsService.load_on_param_change('temperature');
    });

    // WIND ROSE DATA
    this._wmsService.get_wind_rose_data(device_id).subscribe((response) => {
      if (response['success']) {
        this.windrose_data = response['msg'];
        this._wmsService.update_wind_rose_on_device_change(this.windrose_data);
      }
    });
  }

  // triggers when device id is changed
  onDeviceSelect(device_id: string) {
    this.data_on_device_select_subs.unsubscribe();// unsubscribe from previous requests
    this.getApiData(device_id);
  }
}
