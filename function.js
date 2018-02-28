'use strict';

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

let sum = adder(8, 7);
console.log(sum);

