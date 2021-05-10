import { getPostById } from './../state/posts.selector';
import { Store } from '@ngrx/store';
import { AppState } from './../../store/app.state';
import { Post } from './../../models/posts.model';
import { Observable } from 'rxjs';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-single-post',
  encapsulation: ViewEncapsulation.None,
  templateUrl: './single-post.component.html',
  styleUrls: ['./single-post.component.css'],
})
export class SinglePostComponent implements OnInit {
  post: Observable<Post>;

  constructor(private store: Store<AppState>, private router: Router) {}

  ngOnInit(): void {
    this.post = this.store.select(getPostById);
  }

  gotoPosts(userId){
    this.router.navigate([userId+'/posts']);
  }
}
