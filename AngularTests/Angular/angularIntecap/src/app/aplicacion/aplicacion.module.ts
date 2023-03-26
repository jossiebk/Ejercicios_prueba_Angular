import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { PerfilComponent } from './perfil/perfil.component';
import { ProductoComponent } from './producto/producto.component';
import { AplicacionRoutingModule } from './aplicacion-routing.module';



@NgModule({
  declarations: [
    HomeComponent,
    PerfilComponent,
    ProductoComponent
  ],
  imports: [
    CommonModule, AplicacionRoutingModule
  ],
  exports:[
    HomeComponent
  ]
})
export class AplicacionModule { }
