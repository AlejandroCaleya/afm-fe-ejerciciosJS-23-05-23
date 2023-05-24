/* 17. Crea un programa que solicite al usuario ingresar un número y muestre en la consola todos
los números pares desde 2 hasta ese número utilizando un bucle `while`. */

let J = +prompt('Ingrese su número:')
let i = 2;

while (i <= J) {
    console.log(i);
    i = i + 2;
}