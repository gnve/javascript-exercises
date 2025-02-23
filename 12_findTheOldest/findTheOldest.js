const findTheOldest = function(people) {
    let greatestAge = 0;
    let oldestPerson;
    for (let i = 0; i < people.length; i++) {
        if (people[i].yearOfDeath === undefined) {
            people[i].yearOfDeath = new Date().getFullYear();
        }
        thisAge = people[i].yearOfDeath - people[i].yearOfBirth
        
        if (thisAge > greatestAge) {
            greatestAge = thisAge;
            oldestPerson = people[i];
        }
    }
    return oldestPerson;
};

// todo
    // if yearOfDeath is not available, what do

// Do not edit below this line
module.exports = findTheOldest;
