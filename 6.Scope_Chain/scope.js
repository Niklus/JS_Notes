// Every function has a reference to its outer lexical environment
// Where it physically created

function a() {
    
    function b() {

    	//var myVar = 3;

        console.log(myVar);
    }

    //var myVar = 2;
    
	b();
}

var myVar = 1;
a();