/** 
*	const and let
*/

function getClothing1(isCold) {
  if (isCold) {
    var freezing = 'Grab a jacket!';
  } else {
    var hot = 'It’s a shorts kind of day.';
    console.log(freezing);
  }
}

getClothing1(false) // undefined coz freezing is hoisted

function getClothing2(isCold) {
  if (isCold) {
    let freezing = 'Grab a jacket!';
    console.log(hot); 
  } else {
    const hot = 'It’s a shorts kind of day.';
    console.log(freezing);
  }
}

//getClothing2(false)  //ReferenceError: freezing is not defined
//getClothing2(true)  // ReferenceError: hot is not defined

/**
* Rules for using let and const:
* Variables declared with let can be reassigned, but can’t be redeclared in the same scope.
* Variables declared with const must be assigned an initial value, but can’t be redeclared in the same scope, and can’t be reassigned.
*/


function changeName(name){
	if(name){
		let instructor = 'James';
		instructor = name; // reasignment allowed
		console.log(instructor);
		//let instructor = 'error'; // Identifier 'instructor' has already been declared: unlike var - no redeclaring
	}
}

changeName('Mike');

/*
Use cases

use let when you plan to reassign new values to a variable, and
use const when you don’t plan on reassigning new values to a variable.

Is there any reason to use var anymore? Not really.

There are some arguments that can be made for using var in situations where you want to globally define variables, 
but this is often considered bad practice and should be avoided

*/
