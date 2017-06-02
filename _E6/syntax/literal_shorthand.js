//Object literal shorthand

let type = 'quartz';
let color = 'rose';
let carat = 21.29;

const gemstone1 = {type, color, carat}

console.log(gemstone1)

const gemstone2 = {
	type, 
	color, 
	carat,
	claculateWorth(){} // No need for function keyword
};

console.log(gemstone2)
