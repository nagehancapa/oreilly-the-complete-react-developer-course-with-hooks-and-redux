"use strict";

// arguments object - no longer bound with arrow functions

var add = function add(a, b) {
  // console.log(arguments); doesn't work with the arrow function
  return a + b;
};

console.log(add(55, 1));

// this keyword - no longer bound

var user = {
  name: "Nagehan",
  cities: ["Kocaeli", "Istanbul", "Eindhoven"],
  printPlacesLived: function printPlacesLived() {
    var _this = this;

    // printPlacesLived function is not work if it is arrow function, because it can't find cities in that case
    return this.cities.map(function (city) {
      return _this.name + " has lived in " + city;
    });
    // map is not work if its anonymous function, because it can't find name in that case
  }
};

console.log(user.printPlacesLived());

var multiplier = {
  arrayOfNumbers: [1, 2, 3],
  multiplyBy: 2,
  multiply: function multiply() {
    var _this2 = this;

    return this.arrayOfNumbers.map(function (number) {
      return number * _this2.multiplyBy;
    });
  }
};
console.log(multiplier.multiply());
