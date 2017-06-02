
// Default params
function greet(name = 'Student', greeting = 'Welcome') {
  return `${greeting} ${name}!`;
}

console.log( greet() ); // Welcome Student!
console.log( greet('James') ); // Welcome James!
console.log( greet('Richard', 'Howdy') ); // Howdy Richard!


// Default params and array destructuring
function createGrid([width = 5, height = 5]) {
  return `Generates a ${width} x ${height} grid`;
  // to access the whole array use arguments[index];
  //return arguments[0]
}

console.log( createGrid([]) ); // Generates a 5 x 5 grid
console.log( createGrid([2]) ); // Generates a 2 x 5 grid
console.log( createGrid([2, 3]) ); // Generates a 2 x 3 grid
console.log( createGrid([undefined, 3]) ); // Generates a 5 x 3 grid
//createGrid() // Error - expects an array

// with default params
function createGrid1([width = 5, height = 5] = []) {
  return `...Generating a grid of ${width} by ${height}`;
}

console.log( createGrid1() )// Works, defaults to empty array still maintaining the defaults*/

function houseDescriptor([houseColor = 'green', shutterColors = ['red']]) {
  return `I have a ${houseColor} house with ${shutterColors.join(' and ')} shutters`;
}

console.log( houseDescriptor(['green', ['white', 'gray', 'pink']]) );
console.log( houseDescriptor(['green']) )



// Default params with object destructuring
function createSundae({scoops = 1, toppings = ['Hot Fudge']}) {
  const scoopText = scoops === 1 ? 'scoop' : 'scoops';
  return `Your sundae has ${scoops} ${scoopText} with ${toppings.join(' and ')} toppings.`;
}

createSundae({}); // Your sundae has 1 scoop with Hot Fudge toppings.
createSundae({scoops: 2}); // Your sundae has 2 scoops with Hot Fudge toppings.
createSundae({scoops: 2, toppings: ['Sprinkles']}); // Your sundae has 2 scoops with Sprinkles toppings.
createSundae({toppings: ['Cookie Dough']}); // Your sundae has 1 scoop with Cookie Dough toppings.
// createSundae(); // throws an error expects an object

function createSundae1({scoops = 1, toppings = ['Hot Fudge']} = {}) {
  const scoopText = scoops === 1 ? 'scoop' : 'scoops';
  return `Your sundae has ${scoops} ${scoopText} with ${toppings.join(' and ')} toppings.`;
}
createSundae() // Works : defaults to an empty object


function houseDescriptor({houseColor = 'green', shutterColors = ['red']} = {}) {
  return `I have a ${houseColor} house with ${shutterColors.join(' and ')} shutters`;
}

// All these are valid invokations
houseDescriptor({houseColor: 'red', shutterColors: ['white', 'gray', 'pink']});
houseDescriptor({houseColor: 'red'});
houseDescriptor();
houseDescriptor({shutterColors: ['orange', 'blue']});
houseDescriptor({});

/*
Array defaults vs. object defaults! 
One benefit of object defaults over array defaults is how they handle skipped options.*/


function createSundae({scoops = 1, toppings = ['Hot Fudge']} = {}) {}

createSundae({toppings: ['Hot Fudge', 'Sprinkles', 'Caramel']});

/*
with the createSundae() function using object defaults with destructuring, 
if you want to use the default value for scoops but change the toppings, 
then all you need to do is pass in an object with toppings:
*/

/*With arrays however,*/

function createSundae1([scoops = 1, toppings = ['Hot Fudge']] = []) {}
createSundae1([undefined, ['Hot Fudge', 'Sprinkles', 'Caramel']]);

/*With this function setup, if you want to use the default number of scoops 
  but change the toppings, you'd have to call your function and specify the first
  array element as undefined:
*/

/*
Since arrays are positionally based, we have to pass undefined to "skip" over the first argument 
(and accept the default) to get to the second argument. 
Unless you've got a strong reason to use array defaults with array destructuring, 
always use object defaults with object destructuring!
*/


/*
 * Programming Quiz: Using Default Function Parameters (2-2)
*/

var buildHouse = ({floors = 1, color = 'red', walls = 'brick'} = {}) => {
  return `Your house has ${floors} floor(s) with ${color} ${walls} walls.`;
};

//tests
console.log(buildHouse()); // Your house has 1 floor(s) with red brick walls.
console.log(buildHouse({})); // Your house has 1 floor(s) with red brick walls.
console.log(buildHouse({floors: 3, color: 'yellow'})); // Your house has 3 floor(s) with yellow brick walls.


