// Header component: show all the routes info and user details

import { isAuthenticated, getUserDetail } from './../../../auth/state/auth.selector';
import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { AppState } from 'app/store/app.state';
import { Store } from '@ngrx/store';
import { autoLogout } from 'app/auth/state/auth.actions';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  isAuthenticated: Observable<boolean>;
  getUserDetail: Observable<{}>;
  constructor(private store: Store<AppState>) {}
  user;
  isCollapsed: boolean = true;
  ngOnInit(): void {
    this.isAuthenticated = this.store.select(isAuthenticated);
    this.getUserDetail = this.store.select(getUserDetail)
    this.getUserDetail.subscribe(data => this.user = data);
  }

  onLogout(event: Event) {
    event.preventDefault();
    this.store.dispatch(autoLogout());
  }

  toggleCollapse(): void {
    this.isCollapsed = !this.isCollapsed;
  }
}
