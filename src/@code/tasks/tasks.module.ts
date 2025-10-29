import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { UiModules } from '../ui/src/ui-modules';
import { TasksRoutingModule } from './tasks-routing.module';
import { FormTaskContainer } from './modules/form-tasks/form-task.container';
import { FormTaskComponent } from './modules/form-tasks/view/form-task.component';
import { ReactiveFormsModule } from '@angular/forms';
import { TasksService } from './services/tasks-service';
import { TasksPresenter } from './store/tasks-presenter';
import { CreateCategoryComponent } from './modules/create-category/create-category.component';
import { ViewTableTasksComponent } from './modules/table-tasks/view/view-table-tasks.component';
import { TableTasksContainer } from './modules/table-tasks/table-tasks-container';



@NgModule({
  declarations: [
    FormTaskComponent,
    FormTaskContainer,
    CreateCategoryComponent,
    ViewTableTasksComponent,
    TableTasksContainer
  ],

  imports: [
    BrowserModule,
    CommonModule,
    TasksRoutingModule,
    UiModules,
    ReactiveFormsModule
  ],
  exports: [
    FormTaskComponent,
    FormTaskContainer,
    CreateCategoryComponent
  ],
  providers:[
    TasksService,
    TasksPresenter
  ]
})
export class TasksModule { }
