import { Component, OnInit, Input, OnDestroy, OnChanges } from '@angular/core';
import { WmsService } from '../../wms.service';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-wms-graph',
  templateUrl: './wms-graph.component.html',
  styleUrls: ['./wms-graph.component.css']
})
export class WmsGraphComponent implements OnInit, OnDestroy {
  @Input() graphData: any;
  param_clicked_subs: Subscription;
  data: {
    series: number[],
    category: string[],
    parameter: string,
    unit: string,
    tickInterval: number,
    max: number,
    min: number
  };
  CONFIG = {
    type: 'column',
    accent: 'orange',
    bg: 'white',
    brRadius: 0
  }
  constructor(private _wmsService: WmsService) {

  }

  ngOnInit() {
    //initialise graph with temerature as parameter selected
    this.onParamSelected('temperature', '\xB0 C', 80, -20, 10);
    this.param_clicked_subs = this._wmsService.l_o_p_c_subject.subscribe((
      received_conf: { param: string, unit: string, max: number, min: number, tickInterval: number }
    ) => {
      // parameter config for graph 'p_conf'
      let p_conf: { param: string, unit: string, max: number, min: number, tickInterval: number } = received_conf;
      this.onParamSelected(p_conf.param, p_conf.unit, p_conf.max, p_conf.min, p_conf.tickInterval);
    });
  }


  ngOnDestroy() {
    this.param_clicked_subs.unsubscribe();
  }

  //for displaying graph of average values of last 7 days
  onParamSelected(parameter: string, unit: string, max: number, min: number, tickInterval: number) {
    // this._renderer2.addClass(elRef.nativeElement,'active');
    let series = [];
    let days = [];
    for (let item in this.graphData) {
      series.push(Number(this.graphData[item][parameter]));
      days.push(this.graphData[item]['date']);
    }

    this.data = {
      series: series,
      category: days,
      parameter: parameter,
      unit: unit,
      tickInterval: tickInterval,
      max: max,
      min: min
    }
  }

}




