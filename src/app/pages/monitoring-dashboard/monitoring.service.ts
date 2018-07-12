import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BASE_URL } from '../../config/config';
import { Subject } from 'rxjs/Subject';
import { DataStoreService } from '../../services/data-store.service';
import { AuthService } from '../../services/auth.service';

@Injectable()
export class MonitoringService {

  devices: object[] = [];
  devices_exist: boolean = true;
  dev_rec_sub = new Subject<any>();
  constructor(
    private _httpClient: HttpClient,
    private _dSS: DataStoreService,
    private _authService: AuthService

  ) {
    this.fetch_devices_data_from_db();
  }


  fetch_devices_data_from_db() {
    // get id of client from dataStore
    const cust_email = this._dSS.client_data.email;
    // send http get req to fetch devices data
    this._httpClient.get(BASE_URL + 'fetch-customer-devices.php?email=' + cust_email).subscribe((response) => {
      if (response['success']) {

        const devices = response['msg'].devices;
        if (Array.isArray(devices) && devices.length == 0) {
          this.devices_exist = false;
        }
        const device_names = Object.keys(devices);
        device_names.forEach((name) => {
          this.devices.push({ device_name: name, device_ids: devices[name] });
        });
        // ### send devices to particular device component after data received on reloading app
        this.dev_rec_sub.next(this.devices); // subscribed in wms/glr etc
      }
    });
  }

}
