import { Component, OnInit } from '@angular/core';
import { MonitoringService } from './monitoring.service';
import { DeviceMenuComponent } from './history/device-menu/device-menu.component';
@Component({
  selector: 'app-monitoring-dashboard',
  templateUrl: './monitoring-dashboard.component.html',
  styleUrls: ['./monitoring-dashboard.component.css'],
  providers: [MonitoringService]
})
export class MonitoringDashboardComponent implements OnInit {
  constructor(
    private _monS: MonitoringService
  ) { 

  }

  ngOnInit() {

  }



}
