import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import * as HighCharts from 'highcharts';
import { chart } from 'highcharts';
import * as Exporting from 'highcharts/modules/exporting';
import * as Data from 'highcharts/modules/data';
import * as HighchartsMore from 'highcharts/highcharts-more';
import { Subscription } from 'rxjs/Subscription';
import { WmsService } from '../../wms.service';

@Component({
  selector: 'app-wind-rose',
  templateUrl: './wind-rose.component.html',
  styleUrls: ['./wind-rose.component.css']
})
export class WindRoseComponent implements OnInit, OnDestroy {
  @Input('windRoseData') windRoseData: any[];

  structured_data: any[] = [];
  upd_wr_on_dev_ch_sub_subs: Subscription;
  constructor(
    private _wmsService: WmsService
  ) {
    Exporting(HighCharts);
    Data(HighCharts);
    HighchartsMore(HighCharts);
  }

  ngOnInit() {
    this.structure_data(this.windRoseData);
    this.upd_wr_on_dev_ch_sub_subs = this._wmsService.upd_wr_on_dev_ch_subject.subscribe((windrose_data) => {
      this.structure_data(windrose_data);
    })
  }

  ngOnDestroy() {
    this.upd_wr_on_dev_ch_sub_subs.unsubscribe();
  }

  structure_data(windRoseData) {
    this.structured_data = windRoseData.map((el) => {
      let type = 'column';
      let name = '';
      switch (el['wind_category']) {
        case 'a': {
          name = '0-1 m/h';
          break;
        }
        case 'b': {
          name = '1-24 m/h';
          break;
        }
        case 'c': {
          name = '24-38 m/h';
          break;
        }
        case 'd': {
          name = '38-63 m/h';
          break;
        }
        case 'z': {
          name = '>63 m/h';
          break;
        }
        default: {
          name = ''
        }
      }

      let data = [];
      delete el['wind_category'];
      data = [
        ["N", Number(el['N'])],
        ["NE", Number(el['NE'])],
        ["E", Number(el['E'])],
        ["SE", Number(el['SE'])],
        ["S", Number(el['S'])],
        ["SW", Number(el['S'])],
        ["W", Number(el['W'])],
        ["NW", Number(el['NW'])],
      ]
      return { "type": type, "name": name, "data": data }
    });
    this.init_wind_rose();
  }

  init_wind_rose() {

    let options = {
      chart: {
        polar: true,
        type: 'column'
      },

      title: {
        text: ''
      },

      subtitle: {
        text: ''
      },

      pane: {
        size: '70%',
      },

      legend: {
        align: 'right',
        verticalAlign: 'top',
        y: 100,
        layout: 'vertical'
      },

      xAxis: {
        tickmarkPlacement: 'on',
        type: 'category'
      },

      yAxis: {
        min: 0,
        endOnTick: false,
        showLastLabel: true,
        reversedStacks: false
      },

      series: this.structured_data,
      plotOptions: {
        series: {
          stacking: 'normal',
          shadow: false,
          groupPadding: 0,
          pointPlacement: 'on'
        }
      }
    }

    HighCharts.chart('container', options);
  }




  wms_data = [
    { "N": 1.1, "NE": 10.5, "E": 6.1, "SE": 3.6, "S": 3.5, "SW": 3.7, "W": 7.8, "NW": 4.1, "wind_category": "a" },
    { "N": 1.3, "NE": 11.4, "E": 7.4, "SE": 3.1, "S": 6.5, "SW": 11.4, "W": 11.1, "NW": 3.4, "wind_category": "b" },
    { "N": 0.0, "NE": 0.3, "E": 0.0, "SE": 0.0, "S": 0.0, "SW": 0.0, "W": 0.0, "NW": 0.0, "wind_category": "d" },
    { "N": 0.0, "NE": 0.0, "E": 0.0, "SE": 0.3, "S": 0.1, "SW": 0.1, "W": 0.0, "NW": 0.0, "wind_category": "z" }
  ]



}




/*




 {
          "data": [
            ["N", 12],
            ["NE", 12],
            ["E", 12],
            ["SE", 23],
            ["S", 11],
            ["SW", 12],
            ["W", 18],
            ["NW", 19]
          ],
          "type": "column",
          "name": "<40G"
        },
        {
          "data": [
            ["N", 42],
            ["NE", 44],
            ["E", 45],
            ["SE", 88],
            ["S", 55],
            ["SW", 72],
            ["NW", 66]
          ],
          "type": "column",
          "name": "40-100G,"
        },
        {
          "data": [
            ["N", 500],
            ["NE", 422],
            ["E", 177],
            ["SE", 222],
            ["S", 117],
            ["SW", 129],
            ["W", 182],
            ["NW", 193]
          ],
          "type": "column",
          "name": "100-500G,"
        }, {
          "data": [
            ["N", 782],
            ["NE", 612],
            ["E", 612],
            ["SE", 744],
            ["S", 811],
            ["SW", 612],
            ["W", 518],
            ["NW", 519]
          ],
          "type": "column",
          "name": ">500G"
        }


















*/