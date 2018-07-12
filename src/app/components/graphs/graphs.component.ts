import { Component, OnInit, Input, ViewChild, ElementRef, OnChanges } from '@angular/core';
import * as HighCharts from 'highcharts';
import { chart } from 'highcharts';
@Component({
  selector: 'app-graphs',
  templateUrl: './graphs.component.html',
  styleUrls: ['./graphs.component.css']
})
export class GraphsComponent implements OnInit, OnChanges {
  @ViewChild('chartTarget') chartTarget: ElementRef;
  @Input('config') config: object;
  @Input('data') data: object;
  test = {
    par: 'test'
  }
  chart: {}
  HighCharts: HighCharts.ChartObject;
  constructor() {

  }
  ngOnChanges() {
    this.init_config();
  }
  ngOnInit() {
    this.init_config();
  }

  init_config() {
    this.test = {
      par: this.data['parameter']
    }
    let options: HighCharts.Options = {
      credits: {
        enabled: false
      },
      chart: {
        type: this.config['type'],
        backgroundColor: this.config['bg'],
        borderRadius: this.config['brRadius'],
        alignTicks: false
      },
      plotOptions: {
        column: {
          borderColor: null,
          dataLabels: {
            enabled: true
          },
          enableMouseTracking: false,
        },

      },
      title: {
        text: this.data['parameter'] + ' (24 hrs average)',
        style: {
          color: 'coral',
          fontSize: "15px"
        }
      },
      yAxis: {
        max: this.data['max'],
        min: this.data['min'],
        tickInterval: this.data['tickInterval'],
        endOnTick: false,
        title: {
          text: this.data['unit'],
          style: { color: 'gray' }
        },
        labels: {
          style: {
            color: 'coral'
          }
        },
        gridLineColor: "rgba(236, 125, 125, 0.5)",
      },
      xAxis: {
        categories: this.data['category'],
        labels: {
          style: {
            color: 'coral',
            fontSize: "9px"
          }
        },
        gridLineColor: "rgba(236, 125, 125, 0.5)"
      },
      series: [{
        type: this.config['type'],
        name: this.data['parameter'],
        data: this.data['series'],
        color: this.config['accent']
      },
      {
        type: 'spline',
        name: this.data['parameter'],
        data: this.data['series'],
        color: '#569929'

      }

      ]
    };
    this.HighCharts = chart(this.chartTarget.nativeElement, options);
  }






}
