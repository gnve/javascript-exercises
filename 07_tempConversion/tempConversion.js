const convertToCelsius = function(fahrenheit) {
  let convert = (fahrenheit - 32) * (5/9);
  convert = Number(convert.toFixed(1));
  return convert;
};

const convertToFahrenheit = function(celsius) {
  let convert = (celsius * (9/5)) + 32;
  convert = Number(convert.toFixed(1));
  return convert;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};

// pseudo:
  // convertToCelsius
    // init variable
    // arg - 32 * (5/9)
    // number.toFixed(1)
  // convertToFahrenheit 
    // (arg * (5/9)) + 32