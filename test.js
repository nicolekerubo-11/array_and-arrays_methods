// check all object methods
//Object methods (Object.keys, Object.values, Object.entries, Object.assign, Object.freeze, Object.seal, etc.)
// split(), reverse()
// Object.assign()
// Object.freeze()
// Object.seal()
// Object.isFrozen()
// Object.isSealed()
// Object.keys()
// Object.values()
// Object.entries()


//have a minimum of 15 methods




























const car = {
    make: "Toyota",
    model: "Camry",
    year: 2021,
    color: "blue"
};
console.log("model" in car); // true
console.log("maker" in car); //false

const myObj = {
  name: "John",
  age: 30,
  myCars: {
    car1: "Ford",
    car2: "BMW",
    car3: "Fiat",
  },
};

console.log(myObj.myCars.car2) //
console.log(Object.keys(myObj.myCars)); 
// myObj.myCars["car2"];

const person = {
  firstName: "John",
  lastName: "Doe",
  age: 50,
  fullName: function () {
    return this.firstName + " " + this.lastName; // \n 
  },
};
console.log(person.fullName()); 
``