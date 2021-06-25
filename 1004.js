var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

const a = parseInt(lines.shift());
const b = parseInt(lines.shift());

const prod = a * b;

console.log(`PROD = ${prod}`);