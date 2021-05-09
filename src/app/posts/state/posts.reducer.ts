import {
  loadPostsSuccess,
} from './posts.actions';
import { createReducer, on } from '@ngrx/store';
import { initialState, postsAdapter } from './posts.state';

const _postsReducer = createReducer(
  initialState,
  on(loadPostsSuccess, (state, action) => {
    return postsAdapter.setAll(action.posts, {
      ...state,
      count: state.count + 1,
    });
  })
);

export function postsReducer(state, action) {
  return _postsReducer(state, action);
}
