import { Component, OnInit, OnDestroy } from '@angular/core';
import { LoginComponent } from '../../components/login/login.component';
import { AuthService } from '../../services/auth.service';
import { DataStoreService } from '../../services/data-store.service';
import { AccountService } from './account.service';
import { Subscription } from 'rxjs/Subscription';
import { MatSnackBar } from '@angular/material';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [AccountService]
})
export class HomeComponent implements OnInit, OnDestroy {
  login_credential_sub_subs: Subscription;
  signup_credential_sub_subs: Subscription;
  showLoader: boolean = false;
  constructor(
    private _router: Router,
    private _authService: AuthService,
    private _dSS: DataStoreService,
    private _snackBar: MatSnackBar,
    private _acService: AccountService
  ) {

  }

  ngOnInit() {
    if (this._authService.isAuthenticated()) {
      this._router.navigate(['/monitoring-dashboard']);
    }
    this.login_credential_sub_subs = this._acService.login_credentials_subject
      .subscribe((credentials: { email: string, password: string }) => {
        this.credentialsReceived(credentials);
      });

    this.signup_credential_sub_subs = this._acService.signup_credentials_subject.subscribe((credentials) => {
      this.signUpCredentialsReceived(credentials);
    })

  }

  ngOnDestroy() {
    this.login_credential_sub_subs.unsubscribe();
    this.signup_credential_sub_subs.unsubscribe();
  }



  credentialsReceived(credentials: { email: string, password: string }) {
    // ##### SEND http request to backend here
    // if success store user data in dataStore
    this.showLoader = true;
    this._authService.logIn(credentials).subscribe((response) => {
      this.showLoader = false;
      if (response['success']) {
        this._snackBar.open('Successfully Logged in', 'OK', { duration: 3000 })
        let token_received = response['msg'];
        this._dSS.storeAccessToken(token_received);
        this._router.navigate(['/monitoring-dashboard']);
      } else {
        this._snackBar.open(response['msg'], 'OK', { duration: 3000 })
      }
    },
    (err) => {
      this.showLoader = false;
    });
  }

  signUpCredentialsReceived(credentials: any) {
    this.showLoader = true;
    this._authService.signUp(credentials).subscribe((response) => {
      this.showLoader = false;
      if (response['success']) {
        this._snackBar.open('Account Created', 'OK', { duration: 3000 });
        this._router.navigate(['/login']);
      } else {
        this._snackBar.open(response['msg'], 'OK', { duration: 3000 })
      }
    },
      (err) => {
        this.showLoader = false;
      }
    );
  }

}
