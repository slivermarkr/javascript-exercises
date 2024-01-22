const palindromes = function (str) {
    let newStr = "";
    let itsPalindrome = false;
    for(let i = str.length - 1; i >= 0; i--){
        newStr += str[i];
    }
    //exclude space and non alphabetic char
    //then compare two string
    newStr = newStr.replace(/[^a-z0-9]/gi, '').toLowerCase();
    let modifiedStr = str.replace(/[^a-z0-9]/gi, '').toLowerCase();
    
    if(newStr === modifiedStr){
        itsPalindrome = true;
    }
    return itsPalindrome;
};

// Do not edit below this line
module.exports = palindromes;
