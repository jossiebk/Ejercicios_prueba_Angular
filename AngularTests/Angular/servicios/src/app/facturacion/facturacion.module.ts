import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListadoClientesComponent } from './listado-clientes/listado-clientes.component';
import { ClientesService } from './clientes.service';
ClientesService


@NgModule({
  declarations: [
    ListadoClientesComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    ListadoClientesComponent
  ],
  providers: [ClientesService]
})
export class FacturacionModule { }
