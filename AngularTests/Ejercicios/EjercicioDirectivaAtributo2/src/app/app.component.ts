import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'EjercicioDirectivaAtributo2';

  bombillas=[
    {producto: "Bombilla", tipo: "LED", potencia:"10w"},
    {producto: "Bombilla", tipo: "Fluorescente", potencia:"18w"},
    {producto: "Bombilla", tipo: "Incandescente", potencia:"75w"}
  ]

  ligas=[
    {club: "Antigua", jugados: "21", ganados:"12", perdidos:"5", empates:"4",golesFavor:"45",golesContra:"25",difPuntos:+20,puntos:"40"},
    {club: "Comunicaciones", jugados: "21", ganados:"10", perdidos:"5", empates:"6",golesFavor:"31",golesContra:"24",difPuntos:+7,puntos:"36"},
    {club: "Coban Imperial", jugados: "21", ganados:"10", perdidos:"5", empates:"6",golesFavor:"32",golesContra:"26",difPuntos:+6,puntos:"36"},
    {club: "Malacateco", jugados: "21", ganados:"10", perdidos:"7", empates:"4",golesFavor:"29",golesContra:"24",difPuntos:+5,puntos:"34"},
    {club: "Municipal", jugados: "21", ganados:"8", perdidos:"7", empates:"6",golesFavor:"30",golesContra:"22",difPuntos:+8,puntos:"30"},
    {club: "Guastatoya", jugados: "21", ganados:"7", perdidos:"6", empates:"8",golesFavor:"18",golesContra:"16",difPuntos:+2,puntos:"29"},
    {club: "Xelaju", jugados: "21", ganados:"7", perdidos:"7", empates:"7",golesFavor:"28",golesContra:"21",difPuntos:+7,puntos:"28"},
    {club: "Achuapa", jugados: "21", ganados:"7", perdidos:"8", empates:"6",golesFavor:"26",golesContra:"36",difPuntos:-10,puntos:"27"},
    {club: "Iztapa", jugados: "21", ganados:"7", perdidos:"9", empates:"5",golesFavor:"29",golesContra:"33",difPuntos:-4,puntos:"26"},
    {club: "Xinabajul", jugados: "21", ganados:"7", perdidos:"9", empates:"5",golesFavor:"23",golesContra:"28",difPuntos:-5,puntos:"26"},
    {club: "Saca Chispas", jugados: "21", ganados:"3", perdidos:"12", empates:"6",golesFavor:"19",golesContra:"37",difPuntos:-18,puntos:"15"},
    {club: "Mixco", jugados: "21", ganados:"2", perdidos:"10", empates:"9",golesFavor:"15",golesContra:"33",difPuntos:-18,puntos:"15"}
  ]
}
