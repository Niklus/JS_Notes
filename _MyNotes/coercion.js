 'use strict';

//Coercion: 

var x = '4';
console.log(Number(x)+1); // 5 --explicit coercion  

console.log(x+1); // 41 --implicit coercion  (1 to string '1') before concatenating

console.log(x*2); // 8 --implicit coercion  ('4' to number 4) before multiplying

var z = '3' == 3; // --implicit coercion ('3' to number 3) before comparison
console.log(z);

z = '3' === 3; // no coercion
console.log(z);