// Closure: functions are able to 'remember' and access
// its lexical scope even when executing outside its 
// lexical scope.

function greet(whattosay) {

   // Functions are objects. Can be returned like a value
   return function(name) {
       console.log(whattosay + ' ' + name);
   } 
}

var sayHi = greet('Hi');
sayHi('Tony');
