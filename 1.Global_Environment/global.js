/* 
  Global Object  = 'this' = 'window' 
  Window object is the browsers global Object
  Global means - 'not inside a function'
*/

console.log(this);

var a = 'Hello World'; 

function b(){
	console.log(this.a);
	console.log(window.a);
}

this.b();
window.b();

/*  
  a and b attached to global object.
  Equivalent to writing:
  this.a = 'Hello World';
  window.a = 'Hello World; -- for browsers.
*/




