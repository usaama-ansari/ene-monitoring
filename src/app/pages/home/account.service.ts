import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class AccountService {

  login_credentials_subject = new Subject();
  signup_credentials_subject = new Subject();
  constructor() { }

}
