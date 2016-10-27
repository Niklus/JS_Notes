/*
	Hoisting - Setup Memory Space for Variables and Functions
	before they are executed line by line.
	Functions will execute fine: because it is set to memory with its code.
	Variables will be set to undefined untill execution phase.
*/

b();

console.log(a); // undefined- hosited during creation phase

var a = 'Hello World!';

function b() {
    console.log('Called b!');
}
