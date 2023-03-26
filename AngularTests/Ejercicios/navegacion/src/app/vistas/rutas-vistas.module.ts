import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule,Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CartaComponent } from './carta/carta.component';
import { SalonesComponent } from './salones/salones.component';
import { UbicacionComponent } from './ubicacion/ubicacion.component';
import { ContactoComponent } from './contacto/contacto.component';
import { IniciarSesionComponent } from './iniciar-sesion/iniciar-sesion.component';
import { ReservaComponent } from './reserva/reserva.component';
import { MenuComponent } from './menu/menu.component';
import { BebidasComponent } from './bebidas/bebidas.component';
import { PostresComponent } from './postres/postres.component';

const rutas: Routes=[
  {
    path:"",
    children:[
      {path:"home",component:HomeComponent},
      {path:"carta",component:CartaComponent},
      {path:"salones",component:SalonesComponent},
      {path:"ubicacion",component:UbicacionComponent},
      {path:"contacto",component:ContactoComponent},
      {path:"iniciar-sesion",component:IniciarSesionComponent},
      {path:"reserva",component:ReservaComponent},
      {path:"menu",component:MenuComponent},
      {path:"bebidas",component:BebidasComponent},
      {path:"postres",component:PostresComponent},
      {path:"**",redirectTo:"home"}
    ]
  }
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule, RouterModule.forChild(rutas)
  ]
})
export class RutasVistasModule { }
