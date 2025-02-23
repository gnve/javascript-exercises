const palindromes = function (str) {
    let charStore = "";
    for (i = 0; i < str.length; i++) {
        charStore += str.charAt(i);
        charStore.replace(/[.,!]/g, "");
        charStore.toLowerCase();
    }
    if (charStore === str) {
        return true;
    } else {
        return false;
    }
 };

 // pseudo:
 // for each iteration of str.charAt while i is less than str.length
    // extract charAt iteration
    // += charStore
// return charStore

// Do not edit below this line
module.exports = palindromes;
