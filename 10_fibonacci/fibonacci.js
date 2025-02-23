const fibonacci = function(num) {
    let prevOne = 0;
    let prevtwo = 1;
    let fibAccum;
    if (num === 0) {
        return 0;
    }
    if (num === 1) {
        return 1;
    }
    for (i = 2; i <= num; i++) {
        fibAccum = prevOne + prevtwo;
        prevOne = prevtwo;
        prevtwo = fibAccum;
    }
    return fibAccum;
};

// Do not edit below this line
module.exports = fibonacci;
