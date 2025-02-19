const removeFromArray = function(arr, ...rmv) {
    for (let i = 0; i < arr.length; i++) {
        if (rmv.includes(arr[i])) {
            arr.splice(i, 1);
            i--; // array moves to left upon i removal
        }
    }
    return arr;
};

// pseudo:
// test 1:
// create function removeFromArray that receives two parameters, array and what needs to be removed
    // for loop (int i=1; i < arr.length; 1++)
        // if indexOf(rmv);
        // remove by using splice(position, how many to be removed) 
// return array

// test 2:
// modify the current function to receive secondary arg as optional
    // implement "...rmv"
    // this secondary arg then becomes an array
        // arr[i] === rmv needs to be modified to handle muliple args; arr.includes can be used?


// Do not edit below this line
module.exports = removeFromArray;
