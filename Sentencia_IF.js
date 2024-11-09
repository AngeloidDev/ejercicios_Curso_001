/**
 * Sentencia IF
 */

var nombre = 'Test';
var esCasado = true;
var edad = 8;

if (esCasado) {
  console.log(nombre + ' es casado');
} else {
  console.log(nombre + ' no es casado');
}

if (edad < 12) {
  console.log(nombre + ' es un niño.');
} else if (edad >= 12 && edad < 18) {
  console.log(nombre + ' es un adolecente.');
} else if (edad >= 18 && edad < 60) {
  console.log(nombre + ' es un adulto.');
} else {
  console.log(nombre + ' es un anciano.');
}
