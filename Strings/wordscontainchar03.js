// by default check the value 



/**
 * @param {string[]} words
 * @param {character} x
 * @return {number[]}
 */
var findWordsContaining = function(words, x) {
let arr=[];
for (let i=0;i<words.length;i++)
{
for (let j=0;j<words[i].length;j++)
{
    if (words[i][j] === x)
{arr.push(i)
break;
}
}
}
return arr;
};



//==================================================
//.includes method 



/**
 * @param {string[]} words
 * @param {character} x
 * @return {number[]}
 */
var findWordsContaining = function(words, x) {
   let res=[];
   n=words.length-1;
   while (n>=0)
   {
    if (words[n].includes(x))
    res.push(n);
    n--
   }
return res;
};