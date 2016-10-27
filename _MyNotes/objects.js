
var fish = new Object();
fish.fish = 'lax';

var fish1 = {
	fish: 'lax'
};

function fish2(fish){
	this.fish = fish;

	var log = function(){
		console.log('yo');
	}
}

console.log(fish);
console.log(fish1);
console.log(new fish2('makerel').log());
