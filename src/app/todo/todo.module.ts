import { TodosEffects } from './state/todo.effects';
import { EffectsModule } from '@ngrx/effects';
import { TODO_STATE_NAME } from './state/todo.selector';
import { TodoListComponent } from './todo-list/todo-list.component';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { todosReducer } from './state/todo.reducer';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FilterChecked } from './filter.pipe';

const routes: Routes = [
  {
    path: '',
    component: TodoListComponent
  },
];
@NgModule({
  declarations: [TodoListComponent, FilterChecked],
  imports: [
    NgbModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes),
    StoreModule.forFeature(TODO_STATE_NAME, todosReducer),
    EffectsModule.forFeature([TodosEffects]),
  ],
})
export class TodoModule {}
