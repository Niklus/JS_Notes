'use strict';

/*'typeof' values / data types*/

var val;
console.log(typeof val); // 'undefined' --primitive

val = 'hello world';
console.log(typeof val); // 'string' --primitive

val = 25;
console.log(typeof val); // 'number' --primitive

val = true;
console.log(typeof val); // 'boolean' --primitive

val = null;
console.log(typeof val); // 'object' --bug (null is a primitive)

val = {a: 'b'};
console.log(typeof val); // 'object'

val = undefined;
console.log(typeof val); // 'undefined' --primitive

val = [];
console.log(typeof val); // 'object' -- arrays are object subypes 

val = function(){}
console.log(typeof val); // 'function' -- also an object subtype

val = Symbol;
console.log(typeof val); // 'function' --new in E6 --symbol is a primitive 

console.log(typeof(typeof val)); // 'string' --returned value is always a string
