import { Album } from '../../models/albums.model';
import { createAction, props } from '@ngrx/store';

export const LOAD_ALBUMS = '[albums page] load albums';
export const LOAD_ALBUMS_SUCCESS = '[albums page] load albums success';


export const loadAlbums = createAction(LOAD_ALBUMS);
export const loadAlbumsSuccess = createAction(
  LOAD_ALBUMS_SUCCESS,
  props<{ albums: Album[] }>()
);
