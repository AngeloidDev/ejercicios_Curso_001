/**
 * Operadores matematicos
 * > + - * /
 */
var edadAna, edadMaria, diferenciaEdad;
var sumaEdades, yearAna, yearMaria, yearActual;

edadAna = 34;
edadMaria = 28;
yearActual = 2024;

diferenciaEdad = edadAna - edadMaria;
sumaEdades = edadAna + edadMaria;

yearAna = yearActual - edadAna;
yearMaria = yearActual - edadMaria;

console.log(diferenciaEdad);
console.log(sumaEdades);
console.log('Año en que nació Ana: ' + yearAna);
console.log('Año en que nació María: ' + yearMaria);
console.log(yearActual * 5);
console.log(yearActual / 5);