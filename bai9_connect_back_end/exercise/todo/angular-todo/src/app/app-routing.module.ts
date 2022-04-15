import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {TodoListComponent} from './todo/todo-list/todo-list.component';
import {TodoCreateComponent} from './todo/todo-create/todo-create.component';
import {TodoEditComponent} from './todo/todo-edit/todo-edit.component';
import {TodoDeleteComponent} from './todo/todo-delete/todo-delete.component';

const routes: Routes = [
  {
    path: 'todo',
    loadChildren: () => import('./todo/todo.module').then(module => module.TodoModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
