import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CuentaRegresivaComponent } from './cuenta-regresiva/cuenta-regresiva.component';
import { BarraProgresoComponent } from './barra-progreso/barra-progreso.component';
import { FormsModule } from '@angular/forms';
FormsModule
@NgModule({
  declarations: [
    AppComponent,
    CuentaRegresivaComponent,
    BarraProgresoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
