console.log(document.title);
document.title = 'Prueba de Titulo';
console.log(document.title);

console.log(document.body);

/**
 * obtener elemento del Dom
 */
let h1 = document.getElementsByTagName('h1');
h1[0].innerHTML = 'Prueba';
console.log(h1);

let buttonH = document.getElementById('boton');
console.log(buttonH);
buttonH,addEventListener('click', mensajeAlert);

function mensajeAlert() {
    alert('Alerta!!');
}
