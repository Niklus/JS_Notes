
/**
* Arrow functions
*/

const upperizedNames1 = ['Farrin', 'Kagure', 'Asser']
.map(name => name.toUpperCase());

console.log(upperizedNames1);

/**
* Regular functions can be either function declarations or 
* function expressions, however arrow functions are always expressions.
*/

const greet = name => `Hello ${name}!`;

console.log(greet('Nicholas'));


// Empty parameter list requires parentheses
const sayHi = () => console.log('Sup Bro!');

sayHi();

// multiple parameters requires parentheses
const orderIceCream = (flavor, cone) => console.log(`Here's your ${flavor} ice cream in a ${cone} cone.`);
orderIceCream('chocolate', 'waffle');

//Block body syntax
const upperizedNames2 = ['Farrin', 'Kagure', 'Asser'].map( name => {
  name = name.toUpperCase();
  return `${name} has ${name.length} characters in their name`; 
});
/*
	it uses curly braces to wrap the function body
	and a return statement needs to be used to actually return something from the function.
*/

console.log(upperizedNames2)