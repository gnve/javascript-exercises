const add = function(num1, num2) {
	let answer = num1 + num2;
  return answer;
};

const subtract = function(num1, num2) {
	let answer = num1 - num2;
  return answer;
};

const sum = function(arr) {
  let addition = 0;
  if (arr.length == 0){
    return 0;
  }
  else if (arr.length > 0) {
    for (let i = 0; i < arr.length; i++) {
      addition += arr[i];
    }
    return addition;
  } 
};

const multiply = function(arr) {
  let replaceVar = 1;
  for (let i = 0; i < arr.length; i++) {
      replaceVar = replaceVar * arr[i];
    }
    return replaceVar;
};

// pseudo:
// let's say 2*4*6 = 16
  // first loop 2*4 = 8, need to store 8 somewhere
  // second loop 8*6 = 48, need to replace 8 to 48
  // this replace variable will need to times the next number

const power = function(num1, num2) {
	let answer = num1 ** num2;
  return answer;
};

const factorial = function(num) {
  let returnFactorial = 1;
  if (num === 0) {
    return 1;
  }
  for (let i = num; i > 0; i--) {
    returnFactorial *= i;
  }
  return returnFactorial;
}
// pseudo:
// suppose 5!, 5 * 4 -> store on first iteration

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
