// 8. Crea un programa que pida al usuario ingresar tres números y determine cuál es el mayor de ellos.

let A = prompt('Introduce el 1r numero:');
let B = prompt('Introduce el 2o numero:');
let C = prompt('Introduce el 3r numero:');


// forma facilita

if (A>B && A>C) {
    console.log(A + ' es el mayor')
}

if (B>A && B>C) {
    console.log(B + ' es el mayor')
}

if (C>B && C>A) {
    console.log(C + ' es el mayor')
}