// return the equivalent member of the fibonacci sequence based on input
//



const fibonacci = function(input) {
    if(input < 0)return "OOPS";
    if(input === 0 || input === '0') return 0;

    input = +input;
    let fib =[1,1];
    for(let i = fib.length; i <= input; i++) {
        fib[i] = fib[i-1] + fib[i-2];
    }
    return fib[input-1];
};

// Do not edit below this line
module.exports = fibonacci;
