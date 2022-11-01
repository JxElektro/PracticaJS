
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