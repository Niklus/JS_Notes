'use strict';

/*Functions: Research uses of each type below*/

  /*Function Expression*/
	var printAmount = function(amount){ //Functions Expression
		return amount.toFixed();
	}

	console.log(printAmount(99.99)); // invoked only AFTER expression


  /*Function Declaration*/
	console.log(printAmount2(99.99)); // Can be called Before declaration 'hoisting'
	
	function printAmount2(amount){
		return amount.toFixed();
	}

	console.log(printAmount2(99.99)); // or After

  /*IFFE: Immediately-invoked function expression*/
	(function() {
		var amount = 99.99;
	    console.log(amount.toFixed());
	})();

