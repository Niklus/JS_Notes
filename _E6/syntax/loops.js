/** 
 *  The mighty for...of loop.
 *  The most concise version of all the for loops.
 *  Doesnt work with objects, only supports iterable arrays.
*/

const digits = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

for (const digit of digits) {
  console.log(digit);
}

console.log("-------------")

//You can stop or break a for...of loop at anytime.
for (const digit of digits) {
  if (digit % 2 === 0) {
    continue;
  }
  console.log(digit);
}

console.log("-------------")

const days = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'];

for(const day of days){
	console.log(day.charAt(0).toUpperCase()+day.slice(1));
}


/*Rule of thumb*/

//Use for ..of loops whenever possible

// Not the best: while loops a better alternative for none arrays
for (let i = 0; i < digits.length; i++) {
  //console.log(digits[i]);
}

// Bad for arrays for many reasons - dont use on arrays only in objects as below
for (const index in digits) {
  //console.log(digits[index]);
}

const obj = {
	one : '1',
	two: '2',
	three: '3'
}

// Use for objects
for (const index in obj) {
  //console.log(obj[index]);
}

/*
The forEach loop is another type of for loop. However, forEach() is actually an array method, 
so it can only be used exclusively with arrays. There is also no way to stop or break a forEach loop
*/


