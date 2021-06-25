var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

const numeroDoFuncionario = parseInt(lines.shift());
const horasTrabalhadas = parseInt(lines.shift());
const valorDaHora = parseFloat(lines.shift());

const salario = horasTrabalhadas * valorDaHora;

console.log(`NUMBER = ${numeroDoFuncionario}`);
console.log(`SALARY = U$ ${salario.toFixed(2)}`);