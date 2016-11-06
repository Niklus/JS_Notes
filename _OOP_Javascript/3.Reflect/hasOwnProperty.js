var person = {
    firstname: 'Default',
    lastname: 'Default',
    getFullName: function() {
        return this.firstname + ' ' + this.lastname;  
    }
}

var john = {
    firstname: 'John',
    lastname: 'Doe'
}

john.__proto__ = person;


console.log('-------------------------');

for(var prop in john){
	console.log(prop+': '+john[prop]);
}

console.log('-------------------------');

for(var prop in john){
	if(john.hasOwnProperty(prop)){
	   console.log(prop+': '+john[prop]);
    }
}

