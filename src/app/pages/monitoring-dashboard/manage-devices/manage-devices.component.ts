import { Component, OnInit } from '@angular/core';
import { MonitoringService } from '../monitoring.service';
import { DataStoreService } from '../../../services/data-store.service';

@Component({
  selector: 'app-manage-devices',
  templateUrl: './manage-devices.component.html',
  styleUrls: ['./manage-devices.component.css']
})
export class ManageDevicesComponent implements OnInit {
  devices: object[] = [];
  constructor(
    public _monS: MonitoringService,
    private _dSS: DataStoreService
  ) { }

  ngOnInit() {
    this.devices = this._monS.devices;
  }

}
