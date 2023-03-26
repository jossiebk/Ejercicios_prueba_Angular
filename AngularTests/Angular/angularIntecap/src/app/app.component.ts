import { Component } from '@angular/core';
//[08/03/2023]Estilos 1
import { DomSanitizer } from '@angular/platform-browser';
DomSanitizer
//[08/03/2023]Estilos 1
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angularIntecap';
  CSSURL:string;
  //[08/03/2023]Estilos 1
  constructor(public sanitizer:DomSanitizer){
    this.CSSURL='/assets/estiloPrincipal.css';
  }
  //[08/03/2023]Estilos 1

  //[08/03/2023]Estilos 2
  cambiarEstilo(){
    this.CSSURL=(this.CSSURL==='/assets/estiloPrincipal.css' ? '/assets/estiloPrivado.css' : '/assets/estiloPrincipal.css');
  }
  //[08/03/2023]Estilos 2
}
