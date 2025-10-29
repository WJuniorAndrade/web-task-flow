import { CommonModule } from '@angular/common';
import { LayoutRoutingModule } from './layout-routing.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { UiModules } from '../ui/src/ui-modules';

import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
  ],

  imports: [
    BrowserModule,
    CommonModule,
    LayoutRoutingModule,
    UiModules,
    
  ],
  exports: [
    HeaderComponent,
    FooterComponent
  ],
  providers:[
  ]
})
export class LayoutModule { }
