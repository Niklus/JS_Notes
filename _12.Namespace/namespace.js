// "Faking" namespace: containarising code within objects

var greet = 'Hello!';
var greet = 'Wadup!'; 

console.log(greet);

var english = { 
    greet: { 
        basic: 'Hello!' 
    } 
};

var spanish = {};
spanish.greet = 'Hola!';

var jamaican = {};
jamaican.greet = 'Wagwan!'

console.log(english.greet);
console.log(spanish.greet);
console.log(jamaican.greet);
