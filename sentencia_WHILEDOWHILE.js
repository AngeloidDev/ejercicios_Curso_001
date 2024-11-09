/**
 * Sentencia DO, DO WHILE
 */

/**
 * DO
 */
var i = 1;
while (i <= 10) {
  console.log('Do antes de incrementado: ' + i);
  i++;
}
console.log('Do resultado incrementado: ' + i);

while (i >= 1) {
  console.log('Do antes de decrementado: ' + i);
  i--;
}
console.log('Do resultado decrementado: ' + i);

while (i != 0) {
  console.log('Do resultado sin entrar: ' + i);
  console.log(i);
  i--;
}

/**
 * DO, WHILE
 */
var j = 1;
do {
    console.log('DoWhile antes de incrementar: ' + j)
    j++;
} while(j <= 10){
    console.log('DoWhile al finalizar: ' + j)
}