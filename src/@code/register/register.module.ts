import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { UiModules } from '../ui/src/ui-modules';
import { RegisterRoutingModule } from './register-routing.module';
import { CreateTasksContainer } from './modules/create-tasks.container';
import { CreateTasksComponent } from './modules/view/create-tasks/create-tasks.component';
import { ReactiveFormsModule } from '@angular/forms';
import { TasksService } from './services/tasks-service';
import { TasksPresenter } from './store/tasks-presenter';
import { CreateCategoryComponent } from './modules/view/create-category/create-category.component';



@NgModule({
  declarations: [
    CreateTasksComponent,
    CreateTasksContainer,
    CreateCategoryComponent
  ],

  imports: [
    BrowserModule,
    CommonModule,
    RegisterRoutingModule,
    UiModules,
    ReactiveFormsModule

  ],
  exports: [
    CreateTasksComponent,
    CreateTasksContainer,
    CreateCategoryComponent
  ],
  providers:[
    TasksService,
    TasksPresenter
  ]
})
export class RegisterModule { }
