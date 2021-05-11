import { Todo } from '../models/todos.model';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root',
})
export class TodosService {
  constructor(private http: HttpClient) {}

  getTodos(): Observable<Todo[]> {
    const userData = JSON.parse(localStorage.getItem('userData'));
    return this.http
      .get<Todo[]>(`https://jsonplaceholder.typicode.com/todos?userId=${userData.id}`)
      .pipe(
        map((data) => {
          const todos: Todo[] = [...data];
          for (let key in data) {
            todos.push({ ...data[key], id: key });
          }
          return todos;
        })
      );
  }

  getTodoData(){
    const userData = JSON.parse(localStorage.getItem('userData'));
    return this.http.get(`https://jsonplaceholder.typicode.com/todos?userId=${userData.id}`)
    .pipe(
      map((data) => data)
    );
  }
}
