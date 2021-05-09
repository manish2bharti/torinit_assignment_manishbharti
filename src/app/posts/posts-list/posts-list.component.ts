import { getPosts} from './../state/posts.selector';
import { getUserDetail } from './../../auth/state/auth.selector';
import { PostsService } from './../../services/posts.service';
import { Post, PostComments } from './../../models/posts.model';
import { Observable } from 'rxjs';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'app/store/app.state';
import { loadPosts } from '../state/posts.actions';

@Component({
  selector: 'app-posts-list',
  encapsulation: ViewEncapsulation.None,
  templateUrl: './posts-list.component.html',
  styleUrls: ['./posts-list.component.css'],
})
export class PostsListComponent implements OnInit {
  posts: Observable<Post[]>;
  getUserDetail: Observable<{}>;
  totalPosts;
  activeId;
  queryString = '';
  constructor(private store: Store<AppState>, private postsService: PostsService,) {}

  ngOnInit(): void {
    this.posts = this.store.select(getPosts);
    this.posts.subscribe(data =>{
      this.totalPosts = data.length
    });
    if(this.totalPosts.length){
      this.activeId = 1;
    }
    this.store.dispatch(loadPosts());
  }
}
