class Persona {  
    constructor(nombre, apellido, edad) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = edad;
    }

    getDetalles() {
        console.log(`Nombre: ${this.nombre}, Apellido: ${this.apellido}, Edad: ${this.edad}`);
    }
}


class Jugador extends Persona { //hereda la clase persona
    constructor(nombre, apellido, edad, posicion) {
        super(nombre, apellido, edad);
        this.posicion = posicion;
    }

    getDetalles() {
        console.log(`Nombre: ${this.nombre}, Apellido: ${this.apellido}, Edad: ${this.edad}, Posición: ${this.posicion}`);
    }
}


class Entrenador extends Persona {//hereda la clase persona
    constructor(nombre, apellido, edad, añosExp, idFederacion = null) {
        super(nombre, apellido, edad);
        this.añosExp = añosExp;
        this.idFederacion = idFederacion || Math.floor(10000 + Math.random() * 90000); // número aleatorio de 5 dígitos
    }

    getDetalles() {
        console.log(`Nombre: ${this.nombre}, Apellido: ${this.apellido}, Edad: ${this.edad}, Años de Experiencia: ${this.añosExp}, ID de Federación: ${this.idFederacion}`);
    }
}


class Equipo {
    constructor(entrenador, jugadores) {
        this.entrenador = entrenador;
        this.jugadores = jugadores;
    }

    getDetalles() {
        console.log('Detalles del Entrenador:');
        this.entrenador.getDetalles(); //obtenemos los detalles del entrenador 
        console.log('Detalles de los Jugadores:');
        this.jugadores.forEach(jugador => jugador.getDetalles()); //obtenemos los detalles del array de jugadores 
    }
}

// creamos el array de jugadores
let jugadores = [
    new Jugador('Jhosep', 'Jimenez', 27, 'Portero'),
    new Jugador('Carlos', 'Gómez', 25, 'Defensa'),
    new Jugador('Luis', 'Ramírez', 21, 'Medio'),
    new Jugador('Leo', 'Messi', 35, 'Delantero')
];

// creamos al entrenador
let entrenador = new Entrenador('Roberto', 'Martínez', 45, 10);  

// y por ultimo al  equipo con el entrenador y los jugadores
let equipo = new Equipo(entrenador, jugadores);

// Mostrar detalles del equipo
equipo.getDetalles();


