var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

const a = parseFloat(lines.shift());
const b = parseFloat(lines.shift());
const c = parseFloat(lines.shift());

const media = (a * 2 + b * 3 + c * 5) / 10;

console.log(`MEDIA = ${media.toFixed(1)}`);