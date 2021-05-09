import { Post, PostComments } from './../models/posts.model';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root',
})
export class PostsService {
  constructor(private http: HttpClient) {}

  getPosts(): Observable<Post[]> {
    const userData = JSON.parse(localStorage.getItem('userData'));
    return this.http.get<Post[]>(`https://jsonplaceholder.typicode.com/posts?userId=${userData.id}`)
      .pipe(
        map((data) => {
          let posts: Post[] = [];
          for (let key in data) {
            posts.push({ ...data[key]});
          }
          return posts;
        }),
      );
  }

  getPostById(id: string): Observable<Post> {
    return this.http.get<Post>( `https://jsonplaceholder.typicode.com/posts/${id}`);
  }

  getCommentsByPostId(id: string): Observable<PostComments> {
    return this.http.get<PostComments>(  `https://jsonplaceholder.typicode.com/comments?postId=${id}`)
  }
}
