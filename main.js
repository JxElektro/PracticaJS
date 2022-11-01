
// Declaracion de Variable ( Afecta al elemento window )
let hola = 'hola';
console.log(hola);

// ambito de bloque ( solo se puede acceder a la variable dentro del bloque )
if (true) {
    let hello = 'hola 2';
    console.log(hola);
}

//Console Log del elemento windows
console.log(window.hola);
console.log(window.hello); // undefined porque no puede acceder a una variable dentro de un bloque


// No se puede reasignar la valor a una variable declarada con const , pero si a un objeto compuesto


//Objeto
const obj = {
    name: 'Juan',
    age: 20
}
// Agregar una propiedad al objeto
obj.email = 'juan@juan.com';
console.log(obj);

// Array
const colores = ['rojo', 'azul', 'verde'];
// agregar un elemento al array
colores.push('amarillo'); // push agrega un elemento al final del array
colores.unshift // agrega un elemento al inicio del array
colores.pop // elimina el ultimo elemento del array
colores.shift // elimina el primer elemento del array
colores.splice // elimina un elemento en una posicion especifica
colores.splice(1, 1); // elimina un elemento en la posicion 1
colores.splice(1, 0, 'amarillo'); // agrega un elemento en la posicion 1
colores.splice(1, 1, 'amarillo'); // reemplaza un elemento en la posicion 1
console.log(colores);

// string

let nombre = 'Juan';
console.log(nombre.length); // determina la longitud de un string
console.log(nombre.toUpperCase()); // convierte a mayusculas
console.log(nombre.toLowerCase()); // convierte el string a minusculas
console.log(nombre.charAt(0)); // la posicion del caracter
console.log(nombre.charAt(nombre.length - 1)); // ultimo caracter
console.log(nombre.substring(0, 2)); // desde la posicion 0 hasta la posicion 2
console.log(nombre.substring(2)); // desde la posicion 2 hasta el final
console.log(nombre.split('')); // separa el string en un array
console.log(nombre.split('/')); // separa el string por el caracter que se le pase como parametro

// concatenar
let nombre2 = 'Juan';
let apellido = 'Perez';
console.log(nombre2 + ' ' + apellido);

// Template String
let nombre3 = 'Juan';
let apellido3 = 'Perez';
console.log(`Hola ${nombre3} ${apellido3}`);


let ul = ` 
<ul>
    <li>1</li>
    <li>2</li>
    <li>3</li>
</ul>`;
console.log(ul);

// numeros

let num = 10;
console.log(num.toString()); // convertir a string
console.log(num.toFixed(2)); // redondear a 2 decimales
console.log(num.toPrecision(2)); // redondear a 2 digitos
console.log(num.toExponential(2)); //

let num2 = "14.5";

// convertir un string a numero
console.log(Number(num2)); // convierte en numero
console.log(parseInt(num2)); // convierte en numero entero
console.log(parseFloat(num2)); // convierte en numero decimal


console.log(num + parseInt(num2)); // concatena pero solo suma el entero


// boleanos

let bool = true;
console.log(bool)
console.log(bool.toString()); // convierte a string
console.log(bool.toString().split('')); // separa la variable bool en letras

// funciones
function saludar() {
    console.log('Hola');
}
saludar();

//funcion con parametros

function saludar2(nombre) {
    console.log(`Hola ${nombre}`);
}
saludar2('Juan');

// funcion que devuelve valor

function saludar3(nombre) {
    return `Hola ${nombre}`;
}
console.log(saludar3('Pedro'));

// funcions con parametros por defecto

function saludar4(nombre = 'Juan') {
    return `Hola ${nombre}`;
}

// funcion expresada

const saludar5 = function(nombre = 'Juan') {
    return `Hola ${nombre}`;
}

// funcion flecha

const saludar6 = (nombre = 'Juan') => {
    return `Hola ${nombre}`;
}

// funcion flecha con un solo parametro

const saludar7 = nombre => {
    return `Hola ${nombre}`;
}

// ---------------------------------

// arrays

const numeros = [10, 20, 30, 40, 50]; // array de numeros
console.log(numeros.length); // determina la longitud del array
console.log(numeros[0]); // accede al primer elemento del array
console.log(numeros[4]); // accede al ultimo elemento del array
console.log(numeros[5]); // undefined porque no existe el elemento 5

numeros.forEach(function(numero,index) { // recorre el array
    console.log(`<li id="${index}" >${numero}</li>`); // imprime el elemento y su posicion
});

// objetos

const persona = {
    nombre: 'Juan',
    profesion: 'Desarrollador Web',
    edad: 500,
    contacto: {
        email:'juan@gmail.com',
        telefono: '123456789',
        movil: '987654321'
      },
    musica: ['Trance', 'Rock', 'Electronica'],
    hogar: {
        ciudad: 'Bogota',
        pais: 'Colombia'
    },
    saludar:function() {
        return `Hola, me llamo ${this.nombre} y soy ${this.profesion}`; // this hace referencia al objeto
    }
}


console.log(persona.nombre); // accede a la propiedad nombre del objeto persona
console.log(persona['profesion']); // accede a la propiedad profesion del objeto persona
console.log(persona.edad); // accede a la propiedad edad del objeto persona

// destructuring

console.log(persona.saludar()); // accede a la propiedad saludar del objeto persona
console.log(persona.contacto.email); // accede a la propiedad contacto del objeto persona
console.log(persona.musica[1]); // accede a la propiedad musica del objeto persona
console.log(persona.contacto.movil); // accede a la propiedad contacto del objeto persona

// operadores de comparacion

const numero1 = 20;
const numero2 = 50;
const numero3 = '20';

console.log(numero1 > numero2); // false
console.log(numero1 < numero2); // true
console.log(numero1 == numero3); // true
console.log(numero1 === numero3); // false
console.log(numero1 != numero3); // false
console.log(numero1 !== numero3); // true

// operadores logicos
const password1 = 'admin';
const password2 = 'admin';

if(password1 === 'admin' && password2 === 'admin') { // && significa y
    console.log('Ambos passwords son correctos');
}

if(password1 === 'admin' || password2 === 'admin') { // || significa o
    console.log('Al menos uno de los passwords es correcto');
}

// operador ternario
const autenticado = true;
console.log(autenticado ? 'Si esta autenticado' : 'No esta autenticado'); // si autenticado es true imprime el primer valor, si es false imprime el segundo valor

// switch
const metodoPago = 'efectivo';

switch(metodoPago) {
    case 'efectivo':
        console.log(`El usuario pago con ${metodoPago}`);
        break;
    case 'cheque':
        console.log(`El usuario pago con ${metodoPago}`);
        break;
    case 'tarjeta':
        console.log(`El usuario pago con ${metodoPago}`);
        break;
    default:
        console.log('Metodo de pago no soportado');
        break;
}

// operador de decremento y incremento
let puntaje = 5;

// incremento
puntaje++;
console.log(puntaje);

// decremento
puntaje--;
console.log(puntaje);

// incremento de 2 en 2
puntaje += 2;
console.log(puntaje);

// decremento de 2 en 2
puntaje -= 2;
console.log(puntaje);

// estructuras de control

// if
const edad = 20;

if(edad > 18) {
    console.log('Es mayor de edad');
} else {
    console.log('Es menor de edad');
}

//Operador ternario multiple
const logueado = true;
console.log(logueado === true ? 'El usuario esta autenticado' : 'El usuario no esta autenticado');

// sigue el video 15

 // https://www.youtube.com/watch?v=AapgtR0Rwk0&list=PLvq-jIkSeTUZ6QgYYO3MwG9EMqC-KoLXA&index=16