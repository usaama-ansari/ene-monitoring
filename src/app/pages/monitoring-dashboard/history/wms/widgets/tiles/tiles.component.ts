import { Component, OnInit, Input } from '@angular/core';
import { WmsService } from '../../wms.service';

@Component({
  selector: 'app-tiles',
  templateUrl: './tiles.component.html',
  styleUrls: ['./tiles.component.css']
})
export class TilesComponent implements OnInit {
  @Input('tileData') tileData: any;

  constructor(
    private _wmsService: WmsService
  ) { }

  ngOnInit() {
  }

  load_on_param_click(parameter: string) {
    this._wmsService.load_on_param_change(parameter);
  }

}
