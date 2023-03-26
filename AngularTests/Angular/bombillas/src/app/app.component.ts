import { Component } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'bombillas';

  bombillas=[
    {producto: "Bombilla", tipo: "LED", potencia:"10w"},
    {producto: "Bombilla", tipo: "Fluorescente", potencia:"18w"},
    {producto: "Bombilla", tipo: "Incandescente", potencia:"75w"}
  ]
}
