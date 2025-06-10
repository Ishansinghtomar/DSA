/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {

let num=Math.abs(x);
let rev=0;
while (num >0)
{
    rev=(rev*10)+(num%10)
num=Math.floor(num/10)
}

let limit =2**31
if(rev>limit || -limit>rev)
return 0;
else
return x>0?rev:-rev;
};