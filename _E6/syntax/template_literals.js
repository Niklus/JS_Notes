/*
	Template literals 
	String literals that include embedded expressions.
*/

const student = {
  name: 'Richard Kalehoff',
  guardian: 'Mr. Kalehoff'
};

const teacher = {
  name: 'Mrs. Wilson',
  room: 'N231'
}


let message1 = student.name + ' please see ' + teacher.name + ' in ' + teacher.room + ' to pick up your report card.';
console.log(message1);

let message2 = `${student.name} please see ${teacher.name} in ${teacher.room} to pick up your report card.`;
console.log(message2);

console.log(message1 == message2); // true

/*
	By using template literals, you can drop the quotes along with the string concatenation operator (+). 
	Also, you can reference the object's properties inside expressions  ${str}. 

	Embedded expressions inside template literals can do more than just reference variables. 
	You can perform operations, call functions and use loops inside embedded expressions
*/

/*Multi Line String*/
let message3 = `${student.name} please see 
${teacher.name} in ${teacher.room} to pick 
up your report card.`;

console.log(message3);


/*
 * HTML Fragment
 */

const cheetah = {
    name: 'Cheetah',
    scientificName: 'Acinonyx jubatus',
    lifespan: '10-12 years',
    speed: '68-75 mph',
    diet: 'carnivore',
    summary: 'Fastest mammal on land, the cheetah can reach speeds of 60 or perhaps even 70 miles (97 or 113 kilometers) an hour over short distances. It usually chases its prey at only about half that speed, however. After a chase, a cheetah needs half an hour to catch its breath before it can eat.',
    fact: 'Cheetahs have “tear marks” that run from the inside corners of their eyes down to the outside edges of their mouth.'
};

// creates an animal trading card
function createAnimalTradingCardHTML(animal) {
    const cardHTML = `<div class="card">
      <h3 class="name"> ${animal.name} </h3>
      <img src=${animal.name+".jpg"} alt=${animal.name} class="picture">
      <div class="description">
          <p class="fact"> ${animal.fact} </p>
          <ul class="details">
            <li><span class="bold">Scientific Name</span>: ${animal.scientificName} </li>
            <li><span class="bold">Average Lifespan</span>: ${animal.lifespan} </li>
            <li><span class="bold">Average Speed</span>: ${animal.speed} </li>
            <li><span class="bold">Diet</span>: ${animal.diet} </li>
          </ul>
          <p class="brief"> ${animal.summary} </p>
      </div>
    </div>`;

    return cardHTML;
}

console.log(createAnimalTradingCardHTML(cheetah));