







/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {

let count=0
let n=s.length-1;
while (n>=0)
{
if (s[n]!=" ")
{
    ++count;
}
else if (count > 0)
break;

n--; 
}
return count;
};

//=================================================================
// My solution 
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
 let count =0;   
let n=s.length-1;
while (n>=0)
{
if(count === 0 && s[n] === ' ')
{n--
continue;
}

else if(s[n]!=" ")
{
    ++count
--n
}

else 
break;
}
return count;
};

//====================================================================
//Approach 1 with using loops

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {

   let n=s.length-1;
   while (n>=0)
   {
    if(s[n] === " ")
    --n;
    else break;
   }
let count =0;
for (let i=n;i>=0;i--)
{
if(s[i] === " ")
break;
else {
    ++count;
}
}
return count;

};