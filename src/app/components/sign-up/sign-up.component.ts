import { Component, OnInit } from '@angular/core';
import { AccountService } from '../../pages/home/account.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  constructor(
    private _acService: AccountService
  ) { }

  ngOnInit() {
  }

  onSubmit(form: NgForm) {
    this._acService.signup_credentials_subject.next(form.value);
  }

}
