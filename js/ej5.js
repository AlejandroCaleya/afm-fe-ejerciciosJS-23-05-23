/* 5. Declarar una variable llamada "precioProducto" y asignarle un valor numérico que
represente el precio de un producto. Luego, declarar una variable llamada
"porcentajeDescuento" y asignarle un valor numérico que represente el porcentaje de
descuento aplicado al producto. Calcular el precio final después del descuento (usando la
fórmula precioProducto - (precioProducto * porcentajeDescuento / 100)) y mostrar el
resultado en la consola. */

let precioProducto = 13.28;
let porcentajeDescuento = 5;   
let total;

total=precioProducto - (precioProducto * porcentajeDescuento / 100);

console.log(total);