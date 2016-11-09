/*
	Hoisting - Setup Memory Space for Variables and Functions
	during creation phase: before they are executed line by line.
	Function STATEMENTS will execute fine, because they are set to memory in their entirety.
	Variables will be set to undefined untill execution phase where they are set to the returned value.
*/

b();

console.log(a); // undefined- hosited during creation phase

var a = 'Hello World!';

function b() {
    console.log('Called b!');
}
