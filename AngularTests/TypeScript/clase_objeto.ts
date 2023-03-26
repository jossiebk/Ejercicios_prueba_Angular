class Jugador{
    nombre:string;
    constructor(nuevoNombre:string){
        this.nombre=nuevoNombre;
    }

    decirMiNombre(){
        console.log(this.nombre)
    }
}

let nombreJugador = new Jugador("jossie");
console.log(nombreJugador.decirMiNombre());