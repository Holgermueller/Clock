"use strict";

/* declaration
function modulus(parameters) {

} */

// expression

const isEven = function(param) {
  const result = param % 2 === 0;
  console.log(result);
  return result;
};

isEven(10);

const wellIsIt = isEven(10);
console.log(wellIsIt);

const adder = function(equal, odd) {
  const result = equal + odd;
  return result;
};

const sum = adder(8, 7);
console.log(sum);

const subtractor = function(arg1, arg2) {
  const result = arg1 - arg2;
  return result;
};

const difference = subtractor(1, 2);
console.log(difference); 

const mathTeacher = {
  name: 'Josh',
  good: false,
  adder: function(arg1, arg2) {
    const result = arg1 + arg2;
    return result;
  },
};
console.log(mathTeacher.adder(1, 2));
