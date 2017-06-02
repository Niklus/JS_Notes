
/*Rest parameter*/
function printItems(...items){
	for(const item of items){
		console.log(item)
	}
}

printItems('milk','cheese','bread','eggs');


/*with Variadic functions: indefinite parameters*/
function sum1(...nums) {
  let total = 0;  
  for(const num of nums) {
    total += num;
  }
  return total;
}

// ...spread offfers a better altanertive to arguments: readability 
function sum2() {
  let total = 0;  
  for(const argument of arguments) {
    total += argument;
  }
  return total;
}

function average(...nums) {
  let total = 0;  
  for(const num of nums) {
    total += num;
  }
  return total/nums.length  || 0; 
}

console.log(average(2, 6));
console.log(average(2, 3, 3, 5, 7, 10));
console.log(average(7, 1432, 12, 13, 100));
console.log(average());