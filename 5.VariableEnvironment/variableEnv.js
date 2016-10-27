/*
  Scope - each varible ís defined within its execution context.
  Every invoked function creates a new execution context
  and once done its popped off the stack.
*/

function b() {
	var myVar;
    console.log(myVar);
}

function a() {
	var myVar = 2;
    console.log(myVar); 
	b();
}

var myVar = 1; 

console.log(myVar);

a();  

console.log(myVar); 
