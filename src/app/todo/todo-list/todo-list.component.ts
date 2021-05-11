import { getTodos} from './../state/todo.selector';
import { Todo } from './../../models/todos.model';
import { Observable } from 'rxjs';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'app/store/app.state';
import { loadTodos } from '../state/todo.actions';
import { TodosService } from './../../services/todos.service';
import { map } from 'rxjs/operators';

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
  constructor(private store: Store<AppState>, private todoService: TodosService,) {}

  ngOnInit(): void {
    this.todoService.getTodoData().subscribe(
      data => {
        this.newTodoArray = data
      }
    );
  }

  fieldsChange(values:any):void {
    this.newTodoArray.forEach(element => {
      if(values.currentTarget.id == 'todo-'+element.id){
        element.completed = true;
      }
    });
    console.log(values.currentTarget.id);
  }
}
