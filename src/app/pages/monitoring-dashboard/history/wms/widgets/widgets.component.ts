import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-widgets',
  templateUrl: './widgets.component.html',
  styleUrls: ['./widgets.component.css']
})
export class WidgetsComponent implements OnInit {
  @Input('realtimeData') realtimeData: any;
  @Input('graphData') graphData: any;
  @Input('windroseData') windroseData: any;
  constructor() { }

  ngOnInit() {
    
  }

 

}
