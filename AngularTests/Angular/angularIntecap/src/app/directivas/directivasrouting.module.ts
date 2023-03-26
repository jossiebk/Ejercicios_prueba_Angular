import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { NgifComponent } from './ngif/ngif.component';
import { NgforComponent } from './ngfor/ngfor.component';
import { NgswitchComponent } from './ngswitch/ngswitch.component';

const rutas: Routes = [
  {
    path:"",
    children:[
      {path:"ngif",component:NgifComponent},
      {path:"ngfor",component:NgforComponent},
      {path:"ngswitch",component:NgswitchComponent},
      {path:"**", redirectTo:"home"}
    ]
  }
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,RouterModule.forChild(rutas)
  ]
})
export class DirectivasroutingModule { }
