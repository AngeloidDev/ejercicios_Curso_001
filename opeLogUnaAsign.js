/**
 * Operadores
 * > Logicos
 * > Unarios
 * > Asignacion
 */

/**
 * Logicos
 * < > <= >= == ===
 */
var edadAna2, edadMaria2, diferenciaEdad2;

edadAna2 = 34;
edadMaria2 = 28;

var mayorAna = edadAna2 > edadMaria2;
console.log(mayorAna);

var mayorAnaNeg = !(edadAna2 > edadMaria2);
console.log(mayorAnaNeg);

/**
 * Unarios
 * ++ => incremento
 * -- => decremento
 */

console.log(++edadAna2);

/**
 * Asignación
 * +=, -=, *=, /=, %=
 */

var a = 11;
var b = 5;

var c = a % 5; //Residuo o resta de una división
console.log(c);

console.log(a);

a -= b;
console.log(a);

a *= b;
console.log(a);

a /= b;
console.log(a);
