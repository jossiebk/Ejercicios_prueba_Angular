import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {


  constructor(){
  }

  ngOnInit(): void {

  }
  title = 'EjercicioNgFor';
  index:number=0;
  lista:string[]=["Real Madrid","Barcelona","Arsenal","Juventus","Paris Saint Germain", "Manchester United","Manchester City","Roma","Liverpool","Betis"];
  

}
