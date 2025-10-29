import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TasksContainer } from './modules/tasks.container';

export const routes: Routes = [
  {
    path: 'tasks',
    title: 'tasks',
    component: TasksContainer
  },
  {
    path: 'tasks/:id',
    title: 'tasks',
    component: TasksContainer
  } 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class RegisterRoutingModule { }
