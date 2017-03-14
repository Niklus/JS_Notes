/*
  2. Immutability
  Data is treated as immutable in functional programming - state cannot change after it’s created.
  In JavaScript, all primitive types are inherently immutable => String, Number, Boolean, Null, Undefined, and Symbol. 
  Objects and (arrays == objects) are mutable. They must be treated as immutable data in fp
  Object.freeze can be used to turn mutable objects to immutable objects.
*/

var obj = {'a':1, 'b:2'};
Object.freeze(obj);
Object.isFrozen(obj); // returns true
obj.a = 10;           // new assignment has no affect
console.log(obj.a); 

//TODO: How do we "freeze" an array => make it immutable ? 
var arr = [1,2,3];

/*
  Immutable data is important because we need to be able to attach dependable, unchanging values to our functions. 
  No worrying of side-effects that can change an expression’s value. The value remains constant.
  With this guarantee, functions can now be evaluated at any time and in any order and the 
  result is guaranteed to always be the same. And many other advantages.
*/
