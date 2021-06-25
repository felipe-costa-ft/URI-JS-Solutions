var input = require('fs').readFileSync('stdin', 'utf8');
var values = input.split(' ');

const a = parseFloat(values.shift());
const b = parseFloat(values.shift());
const c = parseFloat(values.shift());

const triangulo = a * c / 2;
const circulo = 3.14159 * (c * c);
const trapezio = ((a + b) * c) / 2;
const quadrado = b * b;
const retangulo = a * b;

console.log(`TRIANGULO: ${triangulo.toFixed(3)}`);
console.log(`CIRCULO: ${circulo.toFixed(3)}`);
console.log(`TRAPEZIO: ${trapezio.toFixed(3)}`);
console.log(`QUADRADO: ${quadrado.toFixed(3)}`);
console.log(`RETANGULO: ${retangulo.toFixed(3)}`);