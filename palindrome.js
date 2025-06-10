var isPalindrome = function (x) {
    let num = x;
    let rev = 0
    while (num > 0) {
        rev = (rev * 10) + (num % 10);
        num = Math.floor(num / 10);
    }
return x===rev;

};

console.log(isPalindrome(121));