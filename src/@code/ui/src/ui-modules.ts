import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../src/modules/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE } from '@angular/material/core';
import { MatMomentDateModule, MomentDateAdapter } from '@angular/material-moment-adapter';
import { MY_DATE_FORMATS } from './constants/date-format';
import { MatTableModule } from '@angular/material/table';
import { CodeUiTableComponent } from './component/table/table.component';



@NgModule({
  declarations: [
    CodeUiTableComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    MatMomentDateModule,
    MatTableModule,
  ],
  exports: [
    MaterialModule,
    CodeUiTableComponent
  ],
  providers:[
    { provide: DateAdapter, useClass: MomentDateAdapter, deps: [MAT_DATE_LOCALE] },
    { provide: MAT_DATE_FORMATS, useValue: MY_DATE_FORMATS },
  ]
})
export class UiModules { }
