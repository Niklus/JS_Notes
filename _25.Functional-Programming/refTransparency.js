/*
	3. Referencial Transparency
	
	If a function consistently yields the same result for the same input, it is referentially transparent. (Idempotence)
	You can freely replace an expression with its value and not change the behavior of the program.
	
	Pure functions + immutable data = referential transparency
	- A function that doesn't rely on external states or mutable data will always return the same output for a given input.
*/

let f = (x) => x * x;

f(4); // will always return 16, and thus 16 can always be replaced by f(4)

let g = (x) => f(x) + x; 

g(4); // if we knew the value of x to be  e.g 4,  f(x) could be substituted to 16


// TODO: is g pure ? relies on globally defined f(x)

// Dont think so but g with a callback would be pure since a function can be passed as a value

let gCb = (x, cb) => cb(x) + x; // pure, hiǵher order function


gCb(4,f) === g(4); // returns true