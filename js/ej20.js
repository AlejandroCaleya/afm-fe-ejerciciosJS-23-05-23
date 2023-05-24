/* 20. Crea un programa que solicite al usuario ingresar un número y muestre en la consola todos
los números pares desde ese número hasta 0 utilizando un bucle `while`. */

let N = +prompt('Ingresa el número:');

while (N >=0) {
    if (N % 2 == 0) {
        console.log(N);
    }
    N--;
}

