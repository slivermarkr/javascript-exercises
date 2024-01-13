const repeatString = function(inputString, numTimes) {
    let string = inputString;
    let times = 1;
    if(numTimes < 0){
        return "ERROR";
    } else if (numTimes === 0){
        return "";
    }
    while(times < numTimes){
        string += inputString;
        times++;
    }
    
    return string;
};

// Do not edit below this line
module.exports = repeatString;
