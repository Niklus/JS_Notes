/*
https://classroom.udacity.com/courses/ud356/lessons/1b997dce-e2ce-4246-b5ae-d39ca175f887/concepts/966cea8f-5583-4d46-80ef-ed4c829c63c7
*/

/*
 * Programming Quiz: Make An Iterable Object
 *
 * Turn the `james` object into an iterable object.
 *
 * Each call to iterator.next should log out an object with the following info:
 *     - key: the key from the `james` object
 *     - value: the value of the key from the `james` object
 *     - done: true or false if there are more keys/values
 *
 * For clarification, look at the example console.logs at the bottom of the code.
 */

/*const james = {
    
    name: 'James',
    height: `5'10"`,
    weight: 185,

    [Symbol.iterator]: function * (){
	    for(const key in this){
	    	yield this[key]
	    }
  	}
};

let iterator = james[Symbol.iterator]();

console.log(iterator.next()); 


// .value()'James'



/*console.log(iterator.next().value); // `5'10`
console.log(iterator.next().value); // 185
console.log('====================')

// and now we can use a for of loop for the values
// not possible without the [Symbol.iterator]:
for(const values of james){
	console.log(values)
}*/
