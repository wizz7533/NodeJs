const Useless = require('./useless.js');
const { PI, addition } = require ('./CustomMath.js');

const useless = new Useless('John Doe');

console.log(useless.hello());

console.log( addition(5, 10));
console.log(`PI = ${PI}`);

// console.log(useless.#name);
