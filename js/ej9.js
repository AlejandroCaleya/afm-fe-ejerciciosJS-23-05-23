// 9. Escribe un programa que solicite al usuario ingresar un número y determine si es positivo, negativo o cero.

let S = prompt('Introduce un número:');

if (S>0) {
    console.log('El número '+ S +' es positivo');
} else if (S<0) {
    console.log('El número '+ S +' es negativo');
} else {
    console.log('El número es 0');
}