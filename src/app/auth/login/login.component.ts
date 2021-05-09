import { setLoadingSpinner } from './../../store/Shared/shared.actions';
import { loginStart } from './../state/auth.actions';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'app/store/app.state';

@Component({
  selector: 'app-login',
  encapsulation: ViewEncapsulation.None,
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;

  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      // password: new FormControl('', [Validators.required]),
    });
  }
  onLoginSubmit() {
    const email = this.loginForm.value.email;
    // const password = this.loginForm.value.password;
    this.store.dispatch(setLoadingSpinner({ status: true }));
    // this.store.dispatch(loginStart({ email, password }));
    this.store.dispatch(loginStart({ email}));
  }
}