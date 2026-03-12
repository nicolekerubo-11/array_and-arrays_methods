

const person = {
  name: "Vincent",
  oldGreetings: function () {
    console.log("Hello from Vincent's traditional method!");
  },
  newGreetings() {
    console.log("Hello, I am " + this.name);
  }
};

person.oldGreetings();   // Hello from Vincent's traditional method!
person.newGreetings();      // Hello, I am Vincent