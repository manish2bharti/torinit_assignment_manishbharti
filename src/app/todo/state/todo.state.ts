import { EntityState, createEntityAdapter } from '@ngrx/entity';
import { Todo } from './../../models/todos.model';

export interface TodosState extends EntityState<Todo> {
  count: number;
}

export const todosAdapter = createEntityAdapter<Todo>({
  sortComparer: sortByName,
});

export const initialState: TodosState = todosAdapter.getInitialState({
  count: 0,
});

export function sortByName(a: Todo, b: Todo): number {
  const compare = a.title.localeCompare(b.title);
  // if (compare > 0) {
  //   return -1;
  // }

  // if (compare < 0) {
  //   return 1;
  // }

  return compare;
}
