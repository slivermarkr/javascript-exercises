const add = function(x, y) {
	return x + y;
};

const subtract = function(x, y) {
	return x - y;
};

const sum = function(arrays) {
	total = 0;
  for(let array of arrays){
    total += array;
  }
  return total;
};

const multiply = function(arrays) {
  total = 1;
  for(let array of arrays){
    total *= array;
  }
  return total;
};

const power = function(x, y) {
	return x ** y;
};

const factorial = function(x) {
  let result = 1;
  for(let i = 1; i <= x; i++){
    result *= i
  }
  return result;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
