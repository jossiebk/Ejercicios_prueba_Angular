import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  constructor(){}

    ngOnInit(): void{
      console.log("En este instante el componente se ha cargado en el componente ngOnInit");
    }
  
}
