import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { LayoutModule } from '../@code/layout/layout.module';
import { LayoutRoutingModule } from '../@code/layout/layout-routing.module';
import { UiModules } from '../@code/ui/src/ui-modules';
import { RegisterModule } from '../@code/register/register.module';
import { RegisterRoutingModule } from '../@code/register/register-routing.module';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    CommonModule,
    BrowserModule,

    LayoutModule,
    LayoutRoutingModule,

    RegisterModule,
    RegisterRoutingModule,

    UiModules,

    BrowserAnimationsModule,

    HttpClientModule
  ],
  
  providers: [
  ],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule { }
