import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgifComponent } from './ngif/ngif.component';
import { DirectivasroutingModule } from './directivasrouting.module';
import { NgforComponent } from './ngfor/ngfor.component';
import { NgswitchComponent } from './ngswitch/ngswitch.component';



@NgModule({
  declarations: [
    NgifComponent,NgforComponent,NgswitchComponent
  ],
  imports: [
    CommonModule,DirectivasroutingModule
  ],
  exports: [NgifComponent,NgforComponent,NgswitchComponent]
})
export class DirectivasModule { }
