/* 
	undefined is a SPECIAL VALUE given to declared variables 
	without an assignment, and hoisted variables in the creation phase.
 	'Not Defined' means that the variable is not declared: During creation phase 
 	the enginde didnt find a 'var something' to set up memory for - 'hoist'
	Dont explicitly set undefined --bad practice.
*/

var a;

console.log(a); // Undefined, no value assigned

console.log(c); // Undefined, c is hoisted

var c = 3;

a = 2; 

if (a === undefined) {
    console.log('a is undefined!');   
}else {
    console.log('a is defined!'); // defined 
}  

console.log(b); // Error b is not defined