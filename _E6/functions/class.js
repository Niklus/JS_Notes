
// ES5 syntax
function Plane1(numEngines) {
  this.numEngines = numEngines;
  this.enginesActive = false;
}


// methods "inherited" by all instances
Plane1.prototype.startEngines = function () {
  console.log('starting engines...');
  this.enginesActive = true;
};

const richardsPlane1 = new Plane1(1);
richardsPlane1.startEngines();

const jamesPlane1 = new Plane1(4);
jamesPlane1.startEngines();


// ES6 Class syntax: cleaner same functionality but hides javascript core functionality: 
// That I dont like :(
class Plane2 {
  constructor(numEngines) {
    this.numEngines = numEngines;
    this.enginesActive = false;
  }
  
  // methods "inherited" by all instances: automatically place in prototype
  startEngines() {
    console.log('starting engines…');
    this.enginesActive = true;
  }
}

const richardsPlane2 = new Plane2(1);
richardsPlane2.startEngines();

const jamesPlane2 = new Plane2(4);
jamesPlane2.startEngines();

console.log(typeof Plane2) // function


// Static Methods
class Plane3 {
  constructor(numEngines) {
    this.numEngines = numEngines;
    this.enginesActive = false;
  }

  // Accessed directly on the Plane class
  static badWeather(planes) { 
    for (const plane of planes) {
      plane.enginesActive = false;
      console.log(plane)
    }
  }

  startEngines() {
    console.log('starting engines…');
    this.enginesActive = true;
  }
}

Plane3.badWeather([richardsPlane2, jamesPlane2])
