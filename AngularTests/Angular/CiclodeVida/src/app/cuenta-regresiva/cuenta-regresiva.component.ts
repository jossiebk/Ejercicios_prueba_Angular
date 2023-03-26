import { Component, Input, OnInit, Output, EventEmitter, OnChanges, SimpleChanges, DoCheck, AfterViewInit, AfterViewChecked, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-cuenta-regresiva',
  templateUrl: './cuenta-regresiva.component.html',
  styleUrls: ['./cuenta-regresiva.component.css']
})
export class CuentaRegresivaComponent implements OnInit, OnChanges, DoCheck, AfterViewInit, AfterViewChecked, OnDestroy {

  ngOnInit(): void {
    this.iniciarCuentaRegresiva();
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log("El valor inicial ha sido actualizado a: ",changes['iniciar'].currentValue);
    this.iniciarCuentaRegresiva();
  }

  ngDoCheck(): void {
    console.log("DoCheck ejecutado");
    console.log("--------------------------------");
  }

  ngAfterViewInit(): void {
    console.log("Vista del componente INICIALIZADA COMPLETAMENTE");
  }

  ngAfterViewChecked(): void {
    console.log("VERIFICANDO CAMBIOS CON  ngAfterViewChecked");
  }

  ngOnDestroy(): void {
    this.limpiarTiempoSalida();
    console.log("Limpiar contador")
  }

  @Output() enDisminucion = new EventEmitter<number>();
  @Output() enCompleto = new EventEmitter<void>();

  @Input() iniciar: number | undefined;

  constructor() { 
  }

  public contador:number = 0;
  private contadorTiempoRef:any = null;

  iniciarCuentaRegresiva(){
    if(this.iniciar && this.iniciar >0)
    {
      this.limpiarTiempoSalida();
      this.contador = this.iniciar;
      this.ejecutarCuentaRegresiva();
    }
  }

  ejecutarCuentaRegresiva(){
    this.contadorTiempoRef = setTimeout(()=>{
      this.contador = this.contador -1;
      this.procesoCuentaRegresiva();
    },1000); 
  }

private limpiarTiempoSalida() {
  if(this.contadorTiempoRef){
    clearTimeout(this.contadorTiempoRef);
    this.contadorTiempoRef = null;
  }
  
}

  procesoCuentaRegresiva(){
    this.enDisminucion.emit(this.contador);

    console.log("El contador es ", this.contador);

    if(this.contador == 0){
      this.enCompleto.emit();

      console.log("FIN del contador");
    }
    else{
      this.ejecutarCuentaRegresiva();
    }
  }

}
