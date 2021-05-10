import {
  loadTodosSuccess,
} from './todo.actions';
import { createReducer, on } from '@ngrx/store';
import { initialState, todosAdapter } from './todo.state';

const _todosReducer = createReducer(
  initialState,
  on(loadTodosSuccess, (state, action) => {
    return todosAdapter.setAll(action.todos, {
      ...state,
      count: state.count + 1,
    });
  })
);

export function todosReducer(state, action) {
  return _todosReducer(state, action);
}
