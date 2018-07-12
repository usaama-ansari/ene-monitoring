import { Component, OnInit, OnDestroy } from '@angular/core';
import { MonitoringService } from '../../monitoring.service';
import { DataStoreService } from '../../../../services/data-store.service';

@Component({
  selector: 'app-device-menu',
  templateUrl: './device-menu.component.html',
  styleUrls: ['./device-menu.component.css']
})
export class DeviceMenuComponent implements OnInit, OnDestroy {
  devices: object[] = [];
  
  constructor(
    public _monS: MonitoringService,
    private _dSS: DataStoreService
  ) { }

  ngOnInit() {
    this.devices = this._monS.devices;
  }

  ngOnDestroy() {

  }






}
