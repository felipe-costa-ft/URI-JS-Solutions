var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

const pi = 3.14159;

const raio = parseFloat(lines.shift());

const volume = (4/3.0) * pi * Math.pow(raio, 3);

console.log(`VOLUME = ${volume.toFixed(3)}`);