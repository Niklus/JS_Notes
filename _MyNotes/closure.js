'use strict';

function makeAdder(x){

	return function (y){
		console.log(x+y);
	}
}

var plusOne = makeAdder(1);
plusOne(2);

function makeX(){
    
    var x = 2;
	return function (){
		console.log(x);
	}	
}

makeX()();
