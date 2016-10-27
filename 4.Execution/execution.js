/*
	Executes line by line after hoisting- setting up memory 
	for declared variables. Inititaly to undefined.
*/

function b() {
    console.log('Called b!');
}

b(); // executed

console.log(a); // executed: undefined, coz var 'a' hoisted during creaton phase.

var a = 'Hello World!'; //executed

console.log(a); // Hello World, var a assigned a value during execution phase.