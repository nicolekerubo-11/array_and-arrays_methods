class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  greet() {
    console.log("Hello my name is " + this.name);
  }
}

let person1 = new Person("Kevin", 30);
let person2 = new Person("Jane", 25);

// console.log(person1);
person1.greet();
person2.greet();

class Calculator {
  add(a, b) {
    return a + b;
  }
  multiply(a, b) {
    return a * b;
  }
  division(a, b) {
    return a / b;
  }
  modulus(a, b) {
    return a % b;
  }
}
let calc = new Calculator();

console.log(calc.modulus(4, 3));
console.log(calc.division(65, 5));
console.log(calc.add(5, 3));
console.log(calc.multiply(4, 6));

//parent class
class Animal {
  speak() {
    console.log("animal speaks");
  }
}

//child class
class Dog extends Animal {}
let dog = new Dog();
dog.speak();


//check class names rules --pascal case noun based use singular names instead of plurals
//no spaces in classnames
//no reserved words usage
//first character must not start with a number

class Animal1 {
  constructor(name) {
    this.name = name;
  }
}

class Dog1 extends Animal1 {
  constructor(name, breed) {
    super(name);
    this.breed = breed;
  }
}

let d = new Dog1("Max", "German Shepherd");

console.log(d);

//GETTERS AND SETTER
class User {
  constructor(name) {
    this._name = name;
  }

  get name() {
    return this._name;
  }

  set name(value) {
    this._name = value;
  }
}

let user = new User("Kevin");

console.log(user.name);

user.name = "John";

console.log(user.name);
