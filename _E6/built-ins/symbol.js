/*Symbols: new Js primitive*/

console.log(typeof Symbol()); // symbol 

console.log(Symbol() === Symbol()) // false: each symbol returned is unique.

// used to access obj props like strings
var obj = {};
var sym = Symbol();
obj[sym] = "a";
console.log(obj[sym]);     


/*
The main difference here is the property accessed by 
sym does not show up in the object if iterated on, or if stringify'd. For example:
*/

var obj1 = {};
var sym1 = Symbol();
obj1['hi'] = "bye";
obj1[sym1] = "a";

console.log(obj1);                    // Prints "{hi: 'bye'}"

for (var i in obj1) {
    console.log(i);                    // Prints "hi"
}

console.log(JSON.stringify(obj1));    // Prints {"hi":"bye"}

console.log(Object.getOwnPropertySymbols(obj1));    // Returns [ Symbol() ]


/*Optional descriptor*/
var sym3 = Symbol("foo");
var sym = Symbol("foo");
/*This descriptor is strictly used for debugging purposes, and does not affect the uniqueness of the symbol.*/

Symbol("foo") === Symbol("foo");    // Evaluates to false

var sym = Symbol("foo");
console.log(sym.toString());        // Prints "Symbol(foo)"






