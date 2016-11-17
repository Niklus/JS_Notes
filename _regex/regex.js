// Regular Expressions: A type of object

var re1 = new RegExp("abc"); // With Constructor
var re2 = /abc/; // Literal notation, prefered

console.log(re1);
console.log(re2);
console.log(typeof re1);
console.log('-------------------');

// some character need to be backslash-escaped like '+' e.t.c
var eighteenPlus = /eighteen\+/;

//Match testing
console.log(eighteenPlus.test('eighteen+blabla')); // True
console.log(eighteenPlus.test('+eighteen')); // False
console.log('-------------------');

//With Squrebrackets
var eighteenPlus = /[eighteen\+]/;
console.log(eighteenPlus.test('eighteen+blabla')); // True
console.log(eighteenPlus.test('+eighteen')); // True
console.log(/[0-9]/.test("in 1992")); // true
console.log('-------------------');

//Searching 
var str = 'Hello World';
console.log(str.search(/world/i)); // 6 'begins at index 6'
console.log(str.search('World')); // string converted to a RegEx 
/*
 Modifiers 
 g: 'global', 
 i: 'case-insensitive', 
 */