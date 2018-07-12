import { Component, OnInit, ViewChild, ElementRef, Renderer2 } from '@angular/core';
import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit {
  @ViewChild('sidenav') sidenav: ElementRef;
  isHandset: Observable<BreakpointState> = this.breakpointObserver.observe(Breakpoints.Handset);
  constructor(
    private breakpointObserver: BreakpointObserver,
    private _renderer: Renderer2
  ) { }

  ngOnInit() {
  }

  dismiss() {
    // if (this.isHandset) {
    //   this._renderer.setProperty(this.sidenav, 'opened', false)
    // }
  }
}
