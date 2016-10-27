/*
	statement: function greet(){consol.log('hi')}
	expression: var greet = function(){consol.log('hi')}
	Higher order functions: operate on other functions, 
	either by taking them as arguments or by returning them.
*/

statement();

// Function statements
// Hoisted in it entirety during creation phase thus can be invoked prior to
function statement() {
    console.log('I am  a function statement');   
}

// Function Expression 
// Only the variable is hoisted but not its value(the function) thus  cant be invoked prior to
var expression = function yo() { // anonymous function: no name
    console.log('I am an anonymous function expression');   
}

expression();

// Higher order functions

// Passing functions as values
function higherOrder(a) {
   a();    
}

higherOrder(function() {
    console.log('I am a higher order function');   
});

// returning functions
function higherOrder2() {
	return function(){
		  console.log('I am another higher order function');
	}   
}

higherOrder2()(); // invoked twice!



