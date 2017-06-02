/*

	Higher-order functions are functions that work on other functions. 
	They can take one or more functions as an argument and can also return a function as a result. 

*/


let myfunc = (x, cb) => cb(x) + x; // takes a callback function as a value

let res  = myfunc(2,function(x){
	return x * x;
})

console.log(res) // 6


const findAndMultiply = (index, multiplier) => { // returns a function as a value
  return (array) => {
    if (array && typeof array[index] == 'number') {
      return array[index] * multiplier;
    } else {
      return "Sorry, no can do";
    }
  };
};


let result = findAndMultiply(2,3)([1,2,3]);

console.log(result) // 9

/*
 Some useful higher-order functions:
 commonly used in JavaScript include forEach, map, filter, reduce, reduceRight, find, every and concat. 
*/