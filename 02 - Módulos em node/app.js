const calculadora = require('./calculadora');

console.log(calculadora.soma(5, 3));
console.log(calculadora.sub(10, 8));
console.log(calculadora.mult(2, 9));
console.log(calculadora.div(10, 5));

console.log(calculadora.nome);

calculadora.nome = 'Calculadora do Molina';
console.log(calculadora.nome);
