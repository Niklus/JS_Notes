var man = {
	name: 'man'
}


//console.log(man.__proto__);

var nico = Object.create(man);
nico.name = 'nico';

console.log(nico.name);