//Post component services
import { Post, PostComments } from './../models/posts.model';
import { forkJoin, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { filter, map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root',
})
export class PostsService {
  constructor(private http: HttpClient) {}

  getPosts(): Observable<any> {
    const userData = JSON.parse(localStorage.getItem('userData'));
    return forkJoin([
      this.http.get<Post[]>(`https://jsonplaceholder.typicode.com/posts?userId=${userData.id}`),
      this.http.get<PostComments[]>(  `https://jsonplaceholder.typicode.com/comments`)
    ]).pipe(
        map((data) => {
          let posts: Post[] = data[0];
          let postComments: PostComments[] = data[1];
          for(let i = 0; i < posts.length; i++){
            if(!posts[i].comments){
              posts[i].comments = [] ;
            }
            postComments.filter(comment => {
              if(posts[i].id == comment.postId){
                posts[i].comments.push(comment)
              }
            })
          }
          console.log(posts)
          // for (let key in data) {
          //   posts.push({ ...data[key]});
          // }
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
