'use strict';

/*Equality*/

// Comparing non-primitives
var a = [1,2,3];
var b = [1,2,3];

console.log(a == b); // false --coz only checks if refrence matches not values
console.log(a[1] == b[1]); // true --now we are comparing actual values

var c = "1,2,3"; 

console.log(b == c); // true
console.log(a == c); // true // --coz arrays are by default coerced to strings



