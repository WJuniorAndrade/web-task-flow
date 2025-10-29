import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormTaskContainer } from './modules/form-tasks/form-task.container';
import { TableTasksContainer } from './modules/table-tasks/table-tasks-container';

export const routes: Routes = [
  {
    path: 'tasks',
    title: 'tasks',
    component: TableTasksContainer
  },
  {
    path: 'create/tasks',
    title: 'create/tasks',
    component: FormTaskContainer
  },
  {
    path: 'update/tasks/:id',
    title: 'update',
    component: FormTaskContainer
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class TasksRoutingModule { }
