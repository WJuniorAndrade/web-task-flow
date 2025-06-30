import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateTasksContainer } from './modules/create-tasks.container';

export const routes: Routes = [
  {
    path: 'tasks',
    title: 'tasks',
    component: CreateTasksContainer
  } 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class RegisterRoutingModule { }
