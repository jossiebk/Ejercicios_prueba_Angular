import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AplicacionModule } from './aplicacion/aplicacion.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
AplicacionModule

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AplicacionModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
