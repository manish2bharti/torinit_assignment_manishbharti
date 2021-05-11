import { AppState } from './../../store/app.state';
import { getTodos } from './todo.selector';
import { Store } from '@ngrx/store';
import { map, mergeMap, withLatestFrom } from 'rxjs/operators';
import { loadTodos, loadTodosSuccess } from './todo.actions';
import { TodosService } from './../../services/todos.service';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { dummyAction } from 'app/auth/state/auth.actions';

@Injectable()
export class TodosEffects {
  constructor(
    private actions$: Actions,
    private todoService: TodosService,
    private store: Store<AppState>
  ) {}

  loadTodos$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(loadTodos),
      withLatestFrom(this.store.select(getTodos)),
      mergeMap(([action, todos]) => {
        if (!todos.length || todos.length === 1) {
          return this.todoService.getTodos().pipe(
            map((todos) => {
              todos.map(elem => {
                return Object.assign({}, elem);
              });
              return loadTodosSuccess( {todos} );
            })
          );
        }
        return of(dummyAction());
      })
    );
  });
}
