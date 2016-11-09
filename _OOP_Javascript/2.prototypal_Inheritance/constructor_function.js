//Prototypal Inheritance with constructor functions.

var humanPrototype = {
	head: 'one',
	legs: 'two',
	talk: function(){
		console.log('I can talk');
	} 	
}

// Constructor functions --I construct Objects.
function makeHuman(gender) {
	this.gender = gender;
}

makeHuman.prototype = humanPrototype;

var John = new makeHuman('male');
console.log(John.gender); // unique value
console.log(John.head +' head');
console.log(John.legs +' legs');
John.talk();
console.log('----------------');


var Mary = new makeHuman('female');
console.log(Mary.gender); // unique value
console.log(Mary.head+ ' head');
console.log(Mary.legs+ ' legs');
Mary.talk();
console.log('----------------');


// Javascript is dynamically typed thus we can add methods and properties at run time:
John.name = 'John';
John.smile = function(){console.log(this.name + ' can now smile')}
John.smile();
console.log('----------------');

// A new constructor function can also inherit from human prototype --shares the same prototype with human

function makeSuperHuman(gender) {
	this.gender = gender;
	this.wings = 'two';       // Uniqe property and value
	this.talk  = function(){
		console.log('I can talk & fly' );  // 'Overiding' --wont look down the prtotype chain 
	}    
}

makeSuperHuman.prototype = humanPrototype; // refer to same prototype

var superMan = new makeSuperHuman('male');
console.log(superMan.gender); 
console.log(superMan.head+ ' head');
console.log(superMan.legs+ ' legs');
console.log(superMan.wings+ ' wings'); 
superMan.talk();
console.log('----------------');

var superWoman = new makeSuperHuman('female');
console.log(superWoman.gender); 
console.log(superWoman.head+ ' head');
console.log(superWoman.legs+ ' legs');
console.log(superWoman.wings+ ' wings'); 
superWoman.talk();
console.log('----------------');

// They all share the same prototype thus avoidin duplicate objects
// Avoid obj.__proto__ like the plague
// Use the 'read only' Object.getPrototypeOf(obj)
// Avoid setting prototypes from objects, use E6 setPrototypeOf if necessary

console.log(Object.getPrototypeOf(John));
console.log(Object.getPrototypeOf(Mary));
console.log(Object.getPrototypeOf(superMan));
console.log(Object.getPrototypeOf(superWoman));
console.log('----------------');