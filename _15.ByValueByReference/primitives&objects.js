// by value (primitives)
var a = 3;
var b;

b = a;
a = 2;

console.log(a);
console.log(b);

// by reference (all objects (including functions))
var c = { greeting: 'hi' };
var d;

d = c;
c.greeting = 'hello'; // mutate

console.log(c);
console.log(d);

// by reference (even as parameters)
function changeGreeting(obj) {
    obj.greeting = 'Hola'; // mutate   
}

changeGreeting(d);
console.log(c);
console.log(d);

// equals operator sets up new memory space (new address)
c = { greeting: 'howdy' };
console.log(c);
console.log(d);


var obj1 = {foo:"bar"}
var obj2 = {foo:"bar"}

console.log(obj1==obj2); // false --same reason as (a==b) above

var ref = obj1;

console.log(ref==obj1); // true --coz refers to original obj1

ref.bar="foo"; // --thus ref can mutate obj1 

console.log(obj1.bar); // foo