const convertToCelsius = function(input) {
let celcius = +((input - 32)/1.8).toFixed(1);
  if(celcius === 0){
    return celcius;
  } 
  return celcius;
};

const convertToFahrenheit = function(input) {
let faren = +((input*(9/5))+32).toFixed(1);
 return faren;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
