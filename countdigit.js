function countDigit(n)
{
    if (n == 0)
        return 1;

    let num = Math.abs(n);
    let count = 0;
    while (num > 0)
    {
        num = Math.floor(num / 10);
        count ++;
    }
    
    return count;
}

console.log(countDigit(8))