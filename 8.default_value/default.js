
// With 'OR' operator
function greet1(name) {
    name = name || '<Your name here>';
    console.log('Hello ' + name);    
}

greet1('Tony');
greet1();

console.log('----------------------');

// With tenery operator
function greet2(name) {
    name = name? name : '<Your name here>';
    console.log('Hello ' + name);    
}

greet2('Tony');
greet2();