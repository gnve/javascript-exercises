const repeatString = function(string, num) {
    let thisString = "";
    for (i = 0; i < num; i++) {
        thisString += string;
    }
    if (num < 0) {
        return "ERROR";
    }
    return thisString;
}

// Do not edit below this line
module.exports = repeatString;