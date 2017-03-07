/*

Functional Programming

Places a major emphasis on writing code using functions as “building blocks.”
The program is defined in terms of one main function, defined in terms of other functions and so on
until at the bottom level the functions are just language primitives.

In functional programming, data is immutable — it can’t be changed. Rather than changing data they take in, 
functions in functional programming take in data as input and produce new values as output.

*/

/*
1. Purity

In functional programming, we strive to use “pure” functions as much as possible. There are two qualities that make a function “pure”:
- The function depends only on the input provided to it to produce a result (and not on any external state).
- The function does not cause any observable side effects, such as modifying a global object or modifying a parameter passed by reference.

*/


var PI = 3.14;

// Not pure: relies on valiable PI which isnt eplicitly passed as an argument.
const calculateArea1 = (radius) => radius * radius * PI; 

// Pure: it isn't reliant on this global variable PI
const calculateArea2 = (radius, PI) => radius * radius * PI; 

let count = 1;

// Not pure
const increaseCount1 = (val) => count = count + val;

// Pure
const increaseCount2 = (val, count) => count = count + val;

var myArray = [1, 2, 3, 4, 5];

// Purity depends on the parameter - on how the array is passed
const reverseArray = (array) => array.reverse();

// Case 1: Not pure: A side effect to myArray. Arrays are passed by refrence not value thus a side effect occurs on a global object
var reversedArray = reverseArray(myArray);  

console.log(reversedArray) // [ 5, 4, 3, 2, 1 ]
console.log(myArray) // [ 5, 4, 3, 2, 1 ]

// Case 2: Pure: creating an array on the fly does not cause any side effects to any global object, variable
var reversedArray = reverseArray([1,2,3,4,5]);

console.log(reversedArray) // [5, 4, 3, 2, 1]

// Pure functions are predictable, deterministic and easy to test.
// The goal is not to completely eliminate side effects, but confine them. Impure functions have there place.
// Minimize the amount of impure code and segregate it from the rest of our program.



