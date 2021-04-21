const Useless = require('./useless.js');
const math = require ('./CustomMath.js');

const useless = new Useless('John Doe');

console.log(useless.hello());

console.log( math.addition(5, 10));
console.log(`PI = ${math.PI}`);

// console.log(useless.#name);
