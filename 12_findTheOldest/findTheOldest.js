const findTheOldest = function(people) {
    const oldest = people
        .sort((a, b) => {
        const post = getAge(a.yearOfBirth,a.yearOfDeath);
        const pre = getAge(b.yearOfBirth, b.yearOfDeath);
        return post > pre ? 1 : -1;
    })
    return oldest[0];
};

const getAge = (birth,death) => {
    if(!death){
        death = new Date().getFullYear();
    }
    return birth - death;
}

// Do not edit below this line
module.exports = findTheOldest;
