/**
 * Tipos de datos
 */

//String
var nombre = 'Angel';
console.log(nombre);
console.log(typeof nombre);

//Number
var edad = 38;
console.log(edad);
console.log(typeof edad);

//Ejemplo de tipado dinamico
edad = 'Treinta y ocho';
console.log(edad);
console.log(typeof edad);

//Otro number
var sueldo = 3500.0;
console.log(sueldo);
console.log(typeof sueldo);

//Boolean
var tieneTrabajo = false;
console.log(tieneTrabajo);
console.log(typeof tieneTrabajo);

//Undefined
var puestoTrabajo;
console.log(puestoTrabajo);
console.log(typeof puestoTrabajo);

//Null
puestoTrabajo = null;
console.log(puestoTrabajo);
console.log(typeof puestoTrabajo);

//Object - Array
var arrEmpty = [];
console.log(arrEmpty);
console.log(typeof arrEmpty);
var validation = arrEmpty instanceof Object;
if (validation) {
  console.log('Es un objecto');
}
