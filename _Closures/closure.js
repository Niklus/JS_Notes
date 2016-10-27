/* Closure */

function fooBar() {
	
	var a = 2;
	
	function barFoo() {
		console.log( a );
	}

	return barFoo;
}

var baz = fooBar();

baz();

