const sumAll = function(num1, num2) {
    const arr = [];
    let sum = 0;
    if (num1 > num2) {
        for (let i = num2; i <= num1; i++) {
            arr.push(i);
            sum += i;
        }
    }
    else {
        for (let i = num1; i <= num2; i++) {
        arr.push(i);
        sum += i;
        }
    }
    if ((num1 || num2) < 0) {
        return "ERROR";
        }
    else if ((num1 || num2) % 1 != 0) {
        return "ERROR";
    }
    else if (typeof num1 !== "number" || typeof num2 !== "number") {
        return "ERROR";
    }
    return sum;

};

// Do not edit below this line
module.exports = sumAll;

// pseudo:
// test 1:
// create sumAll function in function declaration form
    // has two args num1 and num2
    // the addition of range [num1, num2] e.g. [1, 4] would be 10
// function loop
    // create an array range starting at num1 and ends at num2
        // while i < num2
        // init const array as an empty array
        // array.push() num1 - num2
        
    //  after loop: return sum of array
        // array.reduce?
