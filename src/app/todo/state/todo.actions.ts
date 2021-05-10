import { Todo } from './../../models/todos.model';
import { createAction, props } from '@ngrx/store';

export const LOAD_TODOS = '[todo page] load todo';
export const LOAD_TODOS_SUCCESS = '[todo page] load todo success';


export const loadTodos = createAction(LOAD_TODOS);
export const loadTodosSuccess = createAction(
  LOAD_TODOS_SUCCESS,
  props<{ todos: Todo[] }>()
);
