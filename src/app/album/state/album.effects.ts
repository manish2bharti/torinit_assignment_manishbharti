import { AppState } from './../../store/app.state';
import { getAlbums } from './album.selector';
import { Store } from '@ngrx/store';
import {
  filter,
  map,
  mergeMap,
  switchMap,
  withLatestFrom,
} from 'rxjs/operators';
import {
  loadAlbums,
  loadAlbumsSuccess,
} from './album.actions';
import { AlbumService } from './../../services/album.service';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Injectable } from '@angular/core';
import {
  RouterNavigatedAction,
  ROUTER_NAVIGATION,
} from '@ngrx/router-store';
import { of } from 'rxjs';
import { dummyAction } from 'app/auth/state/auth.actions';

@Injectable()
export class PostsEffects {
  constructor(
    private actions$: Actions,
    private albumService: AlbumService,
    private store: Store<AppState>
  ) {}

  loadAlbums$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(loadAlbums),
      withLatestFrom(this.store.select(getAlbums)),
      mergeMap(([action, albums]) => {
        if (!albums.length || albums.length === 1) {
          return this.albumService.getPosts().pipe(
            map((albums) => {
              return loadAlbumsSuccess({ albums });
            })
          );
        }
        return of(dummyAction());
      })
    );
  });

  getSinglePost$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(ROUTER_NAVIGATION),
      filter((r: RouterNavigatedAction) => {
        return r.payload.routerState.url.startsWith('/albums/details');
      }),
      map((r: RouterNavigatedAction) => {
        return r.payload.routerState['params']['id'];
      }),
      withLatestFrom(this.store.select(getAlbums)),
      switchMap(([id, albums]) => {
        if (!albums.length) {
          return this.albumService.getPostById(id).pipe(
            map((post) => {
              const albumData = [{ ...post, id }];
              return loadAlbumsSuccess({ albums: albumData });
            })
          );
        }
        return of(dummyAction());
      })
    );
  });
}
