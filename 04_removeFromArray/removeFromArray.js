const removeFromArray = function(myArray) {
    
    let newArray = [];
    for(let i = 0; i < myArray.length; i++){

        if(arguments[1] !== myArray[i] && arguments[2] !== myArray[i] && arguments [3] !== myArray[i] && arguments [4] !== myArray[i]){ 
            newArray.push(myArray[i]);
        }

    }
    return newArray;
};

// Do not edit below this line
module.exports = removeFromArray;
