/**
 * Funciones predefinidas JS
 */

/**
 * Eval
 * evalua codigo JS
 */
console.log(eval('2 + 2'));
// Expected output: 4
console.log(eval(new String('2 + 2')));
// Expected output: 2 + 2
console.log(eval('2 + 2') === eval('4'));
// Expected output: true
console.log(eval('2 + 2') === eval(new String('2 + 2')));
// Expected output: false

/**
 * isFinite checa si una funcion es finita
 * @param {*} x
 * @returns
 */
function div(x) {
  if (isFinite(1000 / x)) {
    return 'Number is NOT Infinity.';
  }
  return 'Number is Infinity!';
}
console.log(div(0));
// Expected output: "Number is Infinity!""
console.log(div(1));
// Expected output: "Number is NOT Infinity."

/**
 * isNaN checa si un valor es NaN // Not-an-Number
 * @param {*} x
 * @returns
 */
function milliseconds(x) {
  if (isNaN(x)) {
    return 'Not a Number!';
  }
  return x * 1000;
}
console.log(milliseconds('100F'));
// Expected output: "Not a Number!"
console.log(milliseconds('0.0314E+2'));
// Expected output: 3140

/**
 * parseInt
 * parsea un String en un integer con/sin base
 */
console.log(parseInt('123'));
// 123 (default base-10)
console.log(parseInt('123', 10));
// 123 (explicitly specify base-10)
console.log(parseInt('   123 '));
// 123 (whitespace is ignored)
console.log(parseInt('077'));
// 77 (leading zeros are ignored)
console.log(parseInt('1.9'));
// 1 (decimal part is truncated)
console.log(parseInt('ff', 16));
// 255 (lower-case hexadecimal)
console.log(parseInt('0xFF', 16));
// 255 (upper-case hexadecimal with "0x" prefix)
console.log(parseInt('xyz'));
// NaN (input can't be converted to an integer)

/**
 * parseFloat
 * parsea un String en un float
 * @param {*} r
 * @returns
 */
function circumference(r) {
  return parseFloat(r) * 2.0 * Math.PI;
}
console.log(circumference(4.567));
// Expected output: 28.695307297889173
console.log(circumference('4.567abcdefgh'));
// Expected output: 28.695307297889173
console.log(circumference('abcdefgh'));
// Expected output: NaN

/**
 * decodeURI
 * decodifica una URI previamente creada por encodeURI
 * encodeURI
 * codifica una URI reemplazando caracteres 
 */
const uri = 'https://mozilla.org/?x=шеллы';
const encoded = encodeURI(uri);
console.log(encoded);
// Expected output: "https://mozilla.org/?x=%D1%88%D0%B5%D0%BB%D0%BB%D1%8B"
try {
  console.log(decodeURI(encoded));
  // Expected output: "https://mozilla.org/?x=шеллы"
} catch (e) {
  // Catches a malformed URI
  console.error(e);
}
