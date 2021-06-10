class Person {
  constructor(name = "Anonymous", age = 0) {
    this.name = name;
    this.age = age;
  }
  getGreeting() {
    return `Hi I am ${this.name}!`;
  }
  getDescription() {
    return `${this.name} is ${this.age} year(s) old.`;
  }
}

class Student extends Person {
  constructor(name, age, major) {
    super(name, age);
    this.major = major;
  }
  hasMojor() {
    return !!this.major; //empty string is falsy,
    // if I use string with ! operator it is true if the string is empty,
    // if there is a string it will false
  }
  getDescription() {
    let description = super.getDescription();

    if (this.hasMojor()) {
      description += ` Their major is ${this.major}.`;
    }

    return description;
  }
}

class Traveller extends Person {
  constructor(name, age, homelocation) {
    super(name, age);
    this.homelocation = homelocation;
  }
  getGreeting() {
    let greeting = super.getGreeting();

    if (this.homelocation) {
      greeting += ` I'm visiting from ${this.homelocation}.`;
    }

    return greeting;
  }
}

// this.name = name || "test"; => use name if it's exist if it's not use "test"

const me = new Traveller("Nagehan Capa", 33, "Eindhoven");
console.log(me.getGreeting());

const other = new Traveller();
console.log(other.getGreeting());
