function greet (){
	console.log('hello world');
}

function sayHi (){
	console.log('hi');
}

setTimeout(function(){
	greet();
},1000);

sayHi();