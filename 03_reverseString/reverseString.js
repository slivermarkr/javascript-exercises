const reverseString = function(input) {
let string = input;
let stringReversed = "";

for(let i = string.length - 1; i >= 0; i--){
    stringReversed += string[i];
}

return stringReversed;
};

// Do not edit below this line
module.exports = reverseString;
