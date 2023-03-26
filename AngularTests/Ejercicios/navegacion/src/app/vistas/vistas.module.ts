import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartaComponent } from './carta/carta.component';
import { HomeComponent } from './home/home.component';
import { SalonesComponent } from './salones/salones.component';
import { UbicacionComponent } from './ubicacion/ubicacion.component';
import { RutasVistasModule } from './rutas-vistas.module';
import { ContactoComponent } from './contacto/contacto.component';
import { IniciarSesionComponent } from './iniciar-sesion/iniciar-sesion.component';
import { ReservaComponent } from './reserva/reserva.component';
import { MenuComponent } from './menu/menu.component';
import { BebidasComponent } from './bebidas/bebidas.component';
import { PostresComponent } from './postres/postres.component';

@NgModule({
  declarations: [
    CartaComponent,
    HomeComponent,
    SalonesComponent,
    UbicacionComponent,
    ContactoComponent,
    IniciarSesionComponent,
    ReservaComponent,
    MenuComponent,
    BebidasComponent,
    PostresComponent
  ],
  exports:[
    HomeComponent,
    CartaComponent,
    UbicacionComponent,
    SalonesComponent,
    ContactoComponent,
    IniciarSesionComponent,
    ReservaComponent,
    MenuComponent,
    BebidasComponent,
    PostresComponent
  ],
  imports: [
    CommonModule,RutasVistasModule
  ]
})
export class VistasModule { }
