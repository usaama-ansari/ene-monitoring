import {
  Component, OnInit,
  HostListener,
  ViewChild,
  Input,
  ElementRef,
  Renderer2
} from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { DataStoreService } from '../../services/data-store.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Input('sidenav') sidenav;
  navOffset: number = null;
  customer_name: string = '';
  constructor(
    private _renderer: Renderer2,
    private _authService: AuthService,
    private _dSS: DataStoreService,
    private _router: Router
  ) {

  }



  ngOnInit() {
    this.customer_name = this._dSS.client_data.customer_name;
  }

  logOut() {
    this._authService.logOut();
    this._router.navigate(['/'])
  }


}
