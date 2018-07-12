import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AccountService } from '../../pages/home/account.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  // @Output('credentialsEmit') credentialsEmit = new EventEmitter<{email: string, password: string}>();
  constructor(
    private _acService: AccountService
  ) { }

  ngOnInit() {

  }

  onLogin(form: NgForm) {
    this._acService.login_credentials_subject.next(form.value);
    // this.credentialsEmit.emit(form.value);
  }

}
