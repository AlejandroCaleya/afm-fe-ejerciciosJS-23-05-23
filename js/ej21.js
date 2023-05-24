/* 21. Realiza un programa que solicite al usuario ingresar un número y muestre en la consola la multiplicación 
de todos los números enteros positivos menores o iguales a ese número utilizando un bucle `do...while`. */

let N  = +prompt('Ingresa un número:');
let multi = 1;

do {
    multi= multi * N;
    N--;
} while (N>=0);