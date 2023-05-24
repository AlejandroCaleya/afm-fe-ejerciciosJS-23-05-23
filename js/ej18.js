/* 18. Realiza un programa que solicite al usuario ingresar un número y muestre en la consola la
suma de todos los números naturales hasta ese número utilizando un bucle `do...while`. */

let num = +prompt('Ingrese su número:');
let i=1;

do {
    console.log(i);
    i++;
} while (i<=num);