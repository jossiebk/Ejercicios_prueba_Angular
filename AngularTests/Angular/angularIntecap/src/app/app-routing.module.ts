import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './aplicacion/home/home.component';
import { PerfilComponent } from './aplicacion/perfil/perfil.component';
import { ProductoComponent } from './aplicacion/producto/producto.component';
HomeComponent
PerfilComponent
ProductoComponent

const routes: Routes = [
 /* {path:"",component:HomeComponent},
  {path:"producto",component:ProductoComponent},
  {path: "usuario/perfil",component:PerfilComponent}*/
  {
    path:"aplicacion",
    loadChildren: () => import("./aplicacion/aplicacion.module").then(module=> module.AplicacionModule)
  },
  {
    path:"directivas",
    loadChildren: () => import("./directivas/directivas.module").then(module => module.DirectivasModule)
  },
  {
    path: "**",
    redirectTo: "aplicacion/home"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
