
// Everything is an object in JS
// Every object(and primitive) are linked to a prototype that leads to
// a base prototype object which is the Object.protptype;

var a = {};
var b = function(){ };
var c = [];
var d = 1;

console.log('-----base prototype------')
console.log(a.__proto__); // linked directly to base prototype

console.log('--------prototype--------')
console.log(b.__proto__);  // properties of functions, arrays, numbers, e.t.c accessible here
console.log(c.__proto__);
console.log(d.__proto__);

console.log('-----base prototype------')
console.log(b.__proto__.__proto__); // prototype chain leeds to base prototype
console.log(c.__proto__.__proto__);
console.log(d.__proto__.__proto__);

console.log('-----Object.prototype ?------')
console.log(Object.prototype == a.__proto__);
console.log(Object.prototype == b.__proto__.__proto__);
console.log(Object.prototype == c.__proto__.__proto__);
console.log(Object.prototype == d.__proto__.__proto__);

