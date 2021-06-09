"use strict";

var square = function square(x) {
  return x * x;
};

var squareArrow = function squareArrow(x) {
  return x * x;
};

var getFirstName = function getFirstName(fullName) {
  return fullName.split(" ")[0];
};

console.log(squareArrow(8));

console.log(getFirstName("Nagehan Capa"));
