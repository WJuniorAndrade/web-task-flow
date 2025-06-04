import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { LayoutModule } from '../@code/layout/layout.module';
import { LayoutRoutingModule } from '../@code/layout/layout-routing.module';
import { UiModules } from '../@code/ui/ui-modules';



@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    CommonModule,
    BrowserModule,

    LayoutModule,
    LayoutRoutingModule,


    UiModules,

    HttpClientModule
  ],
  
  providers: [
  ],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule { }
