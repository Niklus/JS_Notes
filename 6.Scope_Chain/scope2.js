// Every function has a reference to its outer lexical environment
// Where it physically created

function b() {
	console.log(myVar);
}

function a() {
	var myVar = 2;
	b(); 
}

var myVar = 1;

a(); 