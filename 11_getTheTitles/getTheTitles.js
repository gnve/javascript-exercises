const getTheTitles = function(books) {
    let titleArray = [];
    for (let i = 0; i < books.length; i++) {
        titleArray.push(books[i].title);
    }
    return titleArray;
};

// pseudo:
// wants to return an array of books, not just as values or strings
    // access the value from the orginal array books [i]
    // push it into the new array


// Do not edit below this line
module.exports = getTheTitles;
