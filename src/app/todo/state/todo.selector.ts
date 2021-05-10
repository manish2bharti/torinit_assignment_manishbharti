import { RouterStateUrl } from './../../store/router/custom-serializer';
import { getCurrentRoute } from './../../store/router/router.selector';
import { todosAdapter, TodosState } from './todo.state';
import { createFeatureSelector, createSelector } from '@ngrx/store';

export const TODO_STATE_NAME = 'todos';
const getTodosState = createFeatureSelector<TodosState>(TODO_STATE_NAME);
export const todosSelectors = todosAdapter.getSelectors();

export const getTodos = createSelector(getTodosState, todosSelectors.selectAll);
export const getTodoEntities = createSelector(
  getTodosState,
  todosSelectors.selectEntities
);

export const getPostById = createSelector(
  getTodoEntities,
  getCurrentRoute,
  (todos, route: RouterStateUrl) => {
    return todos ? todos[route.params['id']] : null;
  }
);

