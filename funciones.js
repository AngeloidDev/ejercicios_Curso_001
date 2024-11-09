/**
 * Funciones
 * anonimas
 * nombradas sin parametros
 * nombradas con parametros
 * nombradas con parametros con default
 */

/**
 * Expresion Function usando Funcion anonima
 * @returns 
 */
let namelessFunction  = function () {
    return 'Mensaje de funcion anonima';
}
console.log(namelessFunction());

/**
 * Expresion function usando funcion nombrada
 * @returns 
 */
let namelessFunction2  = function test () {
    return 'Mensaje de funcion anonima';
}

/**
 * Funcion nombrada sin parametro
 */
function mensajeSP() {
  console.log('Mensaje enviado desde la funcion sin parametros');
}
mensajeSP();

/**
 * funcion nombrada con parametro
 * @param {*} msg 
 */
function mensajeCP(msg) {
  console.log(msg);
}
let msj = 'Mensaje enviado desde la funcion con parametros';
mensajeCP(msj);

/**
 * Funcion nombrada con return
 * @returns 
 */
function mensajeReturnSP() {
  return 'Mensaje return desde la funcion sin parametros';
}
let msjR = mensajeReturnSP();
console.log(msjR);

/**
 * Funcion con multiples parametros
 * @param {*} a
 * @param {*} b
 * @param {*} c
 * @returns
 */
function sumar(a, b, c) {
  return a + b + c;
}
var resultSumar = sumar(4, 5, 8);
console.log(resultSumar);

/**
 * Funcion con 3 parametros, 1 con valor default
 * @param {*} a
 * @param {*} b
 * @param {*} c
 * @returns
 */
function sumarDefault(a, b, c = 3) {
  return a + b + c;
}
let resultThree = sumarDefault(4, 5, 8);
let resultTwo = sumarDefault(4, 5);
let resultOne = sumarDefault(4);

console.log('Resultado con 3 argumentos: ' + resultThree);
console.log('Resultado con 2 argumentos: ' + resultTwo);
console.log('Resultado con 1 argumentos: ' + resultOne);

/**
 * Funcion recursiva anonima para factorial
 * @param {*} n 
 * @returns 
 */
let factorialAnon = function(n) {
    if( (n == 0) || (n == 1))
        return 1;
    else
        return (n * factorialAnon(n - 1 ));
}
console.log(factorialAnon(5));

/**
 * Funcion recursiva con nombre para factorial
 * @param {*} n 
 * @returns 
 */
let factorialNamed = function fac(n) {
    if( (n == 0) || (n == 1))
        return 1;
    else
        return (n * fac(n - 1 ));
}
console.log(factorialNamed(5));