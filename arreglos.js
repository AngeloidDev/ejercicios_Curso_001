/**
 * Arreglos
 */

/**
 * Tipo de declaración
 */
let bebidas = ['Café', 'Té', 'Limonada'];
let bebidas2 = new Array('Café', 'Té', 'Limonada');

/**
 * Obtener elementos directamente
 */
let nombres = ['Grover', 'Carlos', 'Ana', 'Luisa'];
let vegetales = new Array('Tomate', 'Lechuga', 'Zanahoria');
console.log(nombres[0]);
console.log(vegetales[3]);

/**
 * modificar elementos
 */
nombres[0] = 'José';
vegetales[2] = 'Nabo';

console.log(nombres[0]);
console.log(vegetales[2]);

/**
 * Obtener tamaño array
 */
console.log(nombres.length);

/**
 * Recorrer arreglo con for
 */
for (let i = 0; i <= nombres.length - 1; i++) {
  console.log(nombres[i]);
}

/**
 * Recorrer arreglo con forEach
 * Siempre regresa undefined no es chainable
 */
vegetales.forEach(function (elemento, index) {
  console.log('Elemento: ' + elemento + ' con indice: ' + index);
});

/**
 * Push
 * agrega elemento al final de arreglo
 */
console.log(nombres);
nombres.push('Pedro');
console.log(nombres);

/**
 * unshift
 * agrega elemento al inicio del arreglo
 */
console.log(nombres);
nombres.unshift('Carla');
console.log(nombres);

/**
 * pop
 * quita ultimo elemento de arreglo
 */
console.log(nombres);
nombres.pop();
console.log(nombres);

/**
 * shift
 * quita primer elemento de arreglo
 */
console.log(nombres);
nombres.shift();
console.log(nombres);

/**
 * indexOf
 * obtener index de elemento especifico si existe
 */
let pos = nombres.indexOf('Carlos');
console.log(pos);

/**
 * splice
 * elimina elemento(s) de un arreglo
 * desde posicion X
 * Y elementos
 */
nombres.splice(1, 1); //siendo X=1 y Y=1
console.log(nombres);

/**
 * map
 * crea nuevo array a partir de otro con el resultado de llamar a una funcion
 * con cada elemento de un array previo
 */
let numArray = [1, 2, 3, 4, 5];
console.log(numArray);
let multArray = numArray.map((x) => x * 5);
console.log(multArray);
let multArray2 = numArray.map(function mult4(ele) {
  if (ele % 2 === 0) return ele * 4;
  else return ele * 3;
});
console.log(multArray2);

/**
 * reduce
 * instancia que ejecuta una funcion de reduccion creada por el usuario a cada elemento del array proporcionado
 * el resultado es un single value
 * reduce(funcion, valor incial)
 */
let numArray2 = [1, 2, 3, 4, 5];
console.log(numArray2);
let redArray = numArray2.reduce((acc, cur) => {
  return acc.concat([cur + 1, cur + 2, cur + 3]);
  // or acc.push([cur*1 , cur2, cur+3]); return acc;
}, []);
console.log(redArray);
console.log(redArray.length);

/**
 * flat
 * instancia que crea nuevo array con todos los elementos del subarray concatenados a profundidad especificada
 */
const arr1 = [0, 1, 2, [3, 4]];
console.log(arr1.flat()); // expected output: Array [0, 1, 2, 3, 4]

const arr2 = [0, 1, [2, [3, [4, 5]]]];
console.log(arr2.flat()); // expected output: Array [0, 1, 2, Array [3, Array [4, 5]]]
console.log(arr2.flat(2)); // expected output: Array [0, 1, 2, 3, Array [4, 5]]
console.log(arr2.flat(Infinity)); // expected output: Array [0, 1, 2, 3, 4, 5]

/**
 * flatMap
 * instancia que regresa un nuevo Array aplicando una funcion callback a cada elemento del array proporcionado
 * despues realiza un flat al resultado en 1 nivel
 * es como hacer map y luego flat
 *
 */
const arr3 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const result = arr3.flatMap((num) => {
  return ((num % 2) === 0 ? 'Es par: ' + num: 'Es impar: ' + num);
});
console.log(result);
