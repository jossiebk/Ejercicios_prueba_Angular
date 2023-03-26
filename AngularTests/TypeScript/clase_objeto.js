var Jugador = /** @class */ (function () {
    function Jugador(nuevoNombre) {
        this.nombre = nuevoNombre;
    }
    Jugador.prototype.decirMiNombre = function () {
        console.log(this.nombre);
    };
    return Jugador;
}());
var nombreJugador = new Jugador("jossie");
console.log(nombreJugador.decirMiNombre());
