/* 12. Escribe un programa que solicite al usuario ingresar su calificación en un examen y muestre
en la consola si ha aprobado (calificación mayor o igual a 70) o no. */

let nota = prompt('Introduce la calificación');

if (nota>=70) {
    console.log('Has aprobado');
} else console.log('Has suspendido');