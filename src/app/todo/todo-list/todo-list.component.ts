import { getTodos} from './../state/todo.selector';
import { Todo } from './../../models/todos.model';
import { Observable } from 'rxjs';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'app/store/app.state';
import { loadTodos } from '../state/todo.actions';

@Component({
  selector: 'app-todo-list',
  encapsulation: ViewEncapsulation.None,
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css'],
})
export class TodoListComponent implements OnInit {
  todos: Observable<Todo[]>;
  showCheckedOnly: boolean = false;
  newTodoArray;
  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    this.todos = this.store.select(getTodos);
    this.todos.subscribe(data =>{
      data.map(elem => {
        return Object.assign({}, elem);
      });
      console.log(data)
      return this.newTodoArray = data;
    });
    this.store.dispatch(loadTodos());
  }
}
