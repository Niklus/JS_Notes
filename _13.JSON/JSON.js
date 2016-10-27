/*
 JSON javascript object notation. Not an object
 but can be converted to objects and back to object
 parse and stringify respectivily 
 JSON is strict! no functions as values, double quotes both key and value
*/

var objectLiteral = {
    firstname: 'Mary',
    isAProgrammer: true
}

var jsonString = JSON.stringify(objectLiteral); 

console.log(jsonString); // JSON
console.log(typeof jsonString);

console.log('--------------------------------');

var object = JSON.parse(jsonString);

console.log(object); // object
console.log(typeof object);