
console.log(3>2); // true

console.log(3<2); //false

console.log(1<2<3); //true

console.log(3<2<1); //true ? Why?

// coz it evaluates to (false < 1);
// false coerced to 0
// true coerced to 1
console.log(Number(false));
console.log(Number(true));