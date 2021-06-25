var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

const peca1 = lines.shift().split(' ');
const peca2 = lines.shift().split(' ');

const codigo1 = parseInt(peca1.shift());
const qtdDePecas1 = parseInt(peca1.shift());
const valorPeca1 = parseFloat(peca1.shift());

const codigo2 = parseInt(peca2.shift());
const qtdDePecas2 = parseInt(peca2.shift());
const valorPeca2 = parseFloat(peca2.shift());

const totalAPagar = qtdDePecas1 * valorPeca1 + qtdDePecas2 * valorPeca2;

console.log(`VALOR A PAGAR: R$ ${totalAPagar.toFixed(2)}`);