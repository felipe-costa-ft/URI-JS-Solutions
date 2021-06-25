var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

const nomeDoVendedor = lines.shift();
const salarioFixo = parseFloat(lines.shift());
const montanteEmVendas = parseFloat(lines.shift());

const totalRecebido = salarioFixo + montanteEmVendas*0.15;

console.log(`TOTAL = R$ ${totalRecebido.toFixed(2)}`);