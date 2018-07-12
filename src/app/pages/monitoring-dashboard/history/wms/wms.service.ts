import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { HttpClient } from '@angular/common/http';
import { BASE_URL } from '../../../../config/config';
import { ResolveParamsService } from '../../../../services/resolve-params.service';
import { WmsRealtimeDataInt } from '../../../../models/realtime-data.model';

@Injectable()
export class WmsService {
  l_o_p_c_subject = new Subject();
  upd_wr_on_dev_ch_subject = new Subject();
  graph_conf = {
    'temperature': { param: 'temperature', unit: '\xB0 C', max: 80, min: -20, tickInterval: 10 },
    'humidity': { param: 'humidity', unit: '%', max: 100, min: 0, tickInterval: 10 },
    'pressure': { param: 'pressure', unit: 'mBar', max: 2000, min: 0, tickInterval: 10 },
    'current rainfall': { param: 'current rainfall', unit: 'mm', max: 100, min: 0, tickInterval: 10 },
    'previous rainfall': { param: 'previous rainfall', unit: 'mm', max: 200, min: 0, tickInterval: 20 },
  }

  constructor(
    private _httpClient: HttpClient,
    private _rpService: ResolveParamsService
  ) { }

  load_on_param_change(parameter: string) {
    if (parameter === 'wind direction' || parameter === 'wind speed') {
      return;
    } else {
      let paramGraphConfig = this.graph_conf[parameter];
      this.l_o_p_c_subject.next(paramGraphConfig);
    }
  }

  update_wind_rose_on_device_change(windrose_data) {
    this.upd_wr_on_dev_ch_subject.next(windrose_data);
  }

  get_realtime_poll_data(device_id: string) {
    return this._httpClient.get(BASE_URL + 'fetch-wms-data.php?device-id=' + device_id + '&req-type=1')
  }

  get_averaged_data(device_id: string) {
    return this._httpClient.get(BASE_URL + 'fetch-wms-data.php?device-id=' + device_id + '&req-type=2');
  }

  get_wind_rose_data(device_id: string) {
    return this._httpClient.get(BASE_URL + 'fetch-wms-data.php?device-id=' + device_id + '&req-type=3');
  }

  resolve_realtime_data(rawRtData: { lastUpdated: string, parameters: string[] }): WmsRealtimeDataInt {
    let rawParamsArray = rawRtData.parameters; // get raw '1:45' like parameters array
    let resolvedArray: { name: string, value: string, unit: string }[] = this._rpService.resolve_real_time(rawParamsArray)
    return { lastUpdated: rawRtData.lastUpdated, parameters: resolvedArray };
  }

  resolve_average_data(rawAvData: any) {
    let resolvedAvArray = this._rpService.resolve_average(rawAvData);
    return resolvedAvArray;
  }



}
