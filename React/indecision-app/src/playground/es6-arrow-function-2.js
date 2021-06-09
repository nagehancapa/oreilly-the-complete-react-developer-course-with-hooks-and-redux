// arguments object - no longer bound with arrow functions

const add = (a, b) => {
  // console.log(arguments); doesn't work with the arrow function
  return a + b;
};

console.log(add(55, 1));

// this keyword - no longer bound

const user = {
  name: "Nagehan",
  cities: ["Kocaeli", "Istanbul", "Eindhoven"],
  printPlacesLived() {
    // printPlacesLived function is not work if it is arrow function, because it can't find cities in that case
    return this.cities.map((city) => this.name + " has lived in " + city);
    // map is not work if its anonymous function, because it can't find name in that case
  },
};

console.log(user.printPlacesLived());

const multiplier = {
  arrayOfNumbers: [1, 2, 3],
  multiplyBy: 2,
  multiply() {
    return this.arrayOfNumbers.map((number) => number * this.multiplyBy);
  },
};
console.log(multiplier.multiply());
