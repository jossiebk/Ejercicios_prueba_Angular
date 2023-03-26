import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { PerfilComponent } from './perfil/perfil.component';
import { ProductoComponent } from './producto/producto.component';
import { RouterModule } from '@angular/router';
import { Routes } from '@angular/router';
import { ProteccionGuardGuard } from './proteccion-guard.guard';

const rutas: Routes = [
  {
    path:"",
    children:[
      {path: "home",component:HomeComponent},
      {path: "perfil",component:PerfilComponent, canActivate:[ProteccionGuardGuard]},
      {path: "producto", component:ProductoComponent},
      {path:"**",redirectTo:"home"}
    ]
  }
]


@NgModule({
  declarations: [],
  imports: [
    CommonModule,RouterModule.forChild(rutas)
  ]
})
export class AplicacionRoutingModule { }
