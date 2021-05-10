import {
  loadAlbumsSuccess,
} from './album.actions';
import { createReducer, on } from '@ngrx/store';
import { initialState, albumsAdapter } from './album.state';

const _postsReducer = createReducer(
  initialState,
  on(loadAlbumsSuccess, (state, action) => {
    return albumsAdapter.setAll(action.albums, {
      ...state,
      count: state.count + 1,
    });
  })
);

export function postsReducer(state, action) {
  return _postsReducer(state, action);
}
