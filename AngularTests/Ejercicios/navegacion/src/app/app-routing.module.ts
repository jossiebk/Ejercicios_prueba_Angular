import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartaComponent } from './vistas/carta/carta.component';
import { HomeComponent } from './vistas/home/home.component';
import { UbicacionComponent } from './vistas/ubicacion/ubicacion.component';
import { SalonesComponent } from './vistas/salones/salones.component';
import { MenuComponent } from './vistas/menu/menu.component';
import { BebidasComponent } from './vistas/bebidas/bebidas.component';
import { PostresComponent } from './vistas/postres/postres.component';

const routes: Routes = [
  {
    path:"",
    loadChildren: () => import("./vistas/vistas.module").then(module=> module.VistasModule)
  },
  {
    path:"**",
    redirectTo:"home"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
