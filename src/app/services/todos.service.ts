import { Todo } from '../models/todos.model';
import { forkJoin, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { filter, map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root',
})
export class TodosService {
  constructor(private http: HttpClient) {}

  getTodos(): Observable<any> {
    const userData = JSON.parse(localStorage.getItem('userData'));
    return forkJoin([
      this.http.get<Todo[]>(`https://jsonplaceholder.typicode.com/todos?userId=${userData.id}`),
    ]).pipe(
        map((data) => {
          let todos: Todo[] = data[0];
          console.log(todos)
          // for (let key in data) {
          //   posts.push({ ...data[key]});
          // }
          return todos;
        }),
      );
  }
}
