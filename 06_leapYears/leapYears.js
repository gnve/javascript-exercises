const leapYears = function(yearArg) {
    if (yearArg % 4 === 0 && yearArg % 100 !== 0) {
        return true;
    } 
    else if (yearArg % 100 === 0 && yearArg % 400 === 0) {
        return true;
    }
    else {
        return false;
    }
};

// Do not edit below this line
module.exports = leapYears;


// pseudo:
// test 1:
    // create leapYears function
        // create condition
            // if year % 4 === 0 && year % 100 !== 0 
                // then leap year
            // else if year % 100 === 0 && year % 400 === 0
                // then leap year
            // else 
                // return false