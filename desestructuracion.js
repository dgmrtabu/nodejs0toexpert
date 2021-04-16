const deadpool = {
    nombre: 'Wade',
    apellido: 'Winston',
    poder: 'Regeneracion',
    edad: 50,
    getNombre() {
        return `${ this.nombre} ${this.apellido} ${ this.poder }`
    }
}

console.log(deadpool.getNombre());

/* const nombre = deadpool.nombre
const apellido = deadpool.apellido
const poder = deadpool.poder */

/* const { nombre, apellido, poder, edad = 0 } = deadpool;

console.log(nombre, apellido, poder, edad); */

function imprimirHeroe({ nombre, apellido, poder, edad = 0 }) {
    // const { nombre, apellido, poder, edad = 0 } = heroe;
    nombre = 'David';
    console.log(nombre, apellido, poder, edad);
}

// imprimirHeroe(deadpool);

const herores = ['Deadpool', 'Superman', 'Batman'];

/* const h1 = herores[0];
const h2 = herores[1];
const h3 = herores[2]; */


const [, , h3] = herores;

console.log(h3);