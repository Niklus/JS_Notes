/*

Functional Programming

Functional programming places a major emphasis on writing code using functions as “building blocks.”
Your program is defined in terms of one main function. This main function is defined in terms of other functions, 
which are in turn defined in terms of still more functions — until at the bottom level the functions are just 
language primitives like “number” or “string.”

In functional programming, data is immutable — meaning it can’t be changed. Rather than changing data they take in, 
functions in functional programming take in data as input and produce new values as output.

*/

/*
1. Purity

In functional programming, we strive to use “pure” functions as much as possible. There are two qualities that make a function “pure”:
- The function depends only on the input provided to it to produce a result (and not on any external state).
- The function does not cause any observable side effects, such as modifying a global object or modifying a parameter passed by reference.

*/



var PI = 3.14;

const calculateArea = (radius) => radius * radius * PI; // Not pure: relies on valiable PI which isnt eplicitly passed as an argument.

const calculateArea = (radius, PI) => radius * radius * PI; // Pure: it isn't reliant on this global variable.


let count = 1;
const increaseCount = (val) => count = count + val; // Not Pure


// Not pure: A side effect to the original array. Arrays: by refrence not value
var array = [1, 2, 3, 4, 5];
var reversedArray = reverseArray(array);  

console.log(reversedArray) // [ 5, 4, 3, 2, 1 ]
console.log(array) // [ 5, 4, 3, 2, 1 ]  




