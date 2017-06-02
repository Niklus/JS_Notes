/*
	Destructuring
*/

/* In this example, the brackets [ ] represent the array being destructured
 and x, y, and z represent the variables where you want to store the values from the array*/


// From an array
const point = [10, 25, -34];
const [x, y, z] = point;

console.log(x, y, z);

let positions = ['Gabrielle', 'Jarrod', 'Kate', 'Fernando', 'Mike', 'Walter'];
let [first, second, third] = positions;

console.log(first, second, third);

// From an object
const gemstone = {
  type: 'quartz',
  color: 'rose',
  karat: 21.29
};

// We dont need to specify order like in arrays
const {color, type, karat} = gemstone;

console.log(type, color, karat);


// Long Array
const things = ['red', 'basketball', 'paperclip', 'green', 'computer', 'earth', 'udacity', 'blue', 'dogs'];

const [one,,,two,,,,three] = things;

const colors = `List of Colors
1. ${one}
2. ${two}
3. ${three}`;

console.log(colors);


// Objects 

const circle = {
  radius: 10,
  color: 'orange',
  getArea: function(PI) {
    return PI * this.radius * this.radius;
  }
};

let {radius, getArea} = circle;

let area1 = getArea(Math.PI);

console.log(area1); // NaN:  
/* When you destructure the object and store the getArea method into the getArea variable, 
 it no longer has access to this in the circle object*/ 

// You must use call, apply or bind bind the circle object: not es6 but good to know

// Call
area1 = getArea.call(circle, Math.PI);
console.log(area1);

// Apply 
area1 = getArea.apply(circle, [Math.PI]); 
console.log(area1);

// Bind
area1 = getArea.bind(circle)(Math.PI);
console.log(area1);

// traditionally
let area2 = circle.getArea(Math.PI);
console.log(area1 == area2)
