/* 10. Realiza un programa que solicite al usuario ingresar el día de la semana (como número del
1 al 7) y muestre en la consola el nombre del día correspondiente (por ejemplo, 1
corresponde a "Lunes", 2 corresponde a "Martes", etc.). */

let dia = prompt('Introduce un número');

switch (dia) {
    case '1':
        console.log('lunes');
        break;
    case '2':
        console.log('martes');
        break;
    case '3':
        console.log('miércoles');
        break;
    case '4':
        console.log('jueves');
        break;
    case '5':
        console.log('viernes');
        break;
    case '6':
        console.log('sábado');
        break;
    case '7':
        console.log('domingo');
        break;
    default:
        console.log('No es un día de la semana válido');
        break;
}