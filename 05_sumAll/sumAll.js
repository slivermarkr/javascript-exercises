const sumAll = function(firstNumber,secondNumber) {
    
    if (firstNumber < 0 || secondNumber < 0 || typeof firstNumber !== 'number' || typeof secondNumber !== 'number'){
        return "ERROR";
    }
    let maxNum = Math.max(firstNumber,secondNumber);
    let minNum = Math.min(firstNumber,secondNumber);

   

    let sum = 0;
   for(i = minNum; i <= maxNum; i++){
    sum += i;
   }
   return sum;
};


// Do not edit below this line
module.exports = sumAll;
