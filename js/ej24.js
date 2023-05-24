/* 24. Realiza un programa que solicite al usuario ingresar un número y muestre en la consola la
suma de todos los dígitos del número utilizando un bucle `while`. */

let num = prompt('Ingrese su número');
let suma = 0;
let i = 0;

while (i < num.length) {
    suma = suma + parseInt(num[i]);
    i++
}

console.log(suma);
