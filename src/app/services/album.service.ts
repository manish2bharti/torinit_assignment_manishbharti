// Album service for get the Posts/Comments and PostById data
import { Album, AlbumPhotos } from '../models/albums.model';
import { forkJoin, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { filter, map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root',
})
export class AlbumService {
  constructor(private http: HttpClient) {}

  getPosts(): Observable<any> {
    const userData = JSON.parse(localStorage.getItem('userData'));
    return forkJoin([
      this.http.get<Album[]>(`https://jsonplaceholder.typicode.com/albums?userId=${userData.id}`),
      this.http.get<AlbumPhotos[]>(  `https://jsonplaceholder.typicode.com/photos`)
    ]).pipe(
        map((data) => {
          let albums: Album[] = data[0];
          let albumPhotos: AlbumPhotos[] = data[1];
          for(let i = 0; i < albums.length; i++){
            if(!albums[i].photos){
              albums[i].photos = [] ;
            }
            albumPhotos.filter(photo => {
              if(albums[i].id == photo.albumId){
                albums[i].photos.push(photo)
              }
            })
          }
          console.log(albums)
          // for (let key in data) {
          //   posts.push({ ...data[key]});
          // }
          return albums;
        }),
      );
  }

  getPostById(id: string): Observable<Album> {
    return this.http.get<Album>( `https://jsonplaceholder.typicode.com/posts/${id}`);
  }

  getCommentsByPostId(id: string): Observable<AlbumPhotos> {
    return this.http.get<AlbumPhotos>(  `https://jsonplaceholder.typicode.com/comments?postId=${id}`)
  }
}
