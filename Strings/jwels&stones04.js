




//using set solution to do so o(n)

/**
 * @param {string} jewels
 * @param {string} stones
 * @return {number}
 */
var numJewelsInStones = function(jewels, stones) {
let count=0; 
let set =new Set();
for (let i=0;i<jewels.length;i++)
{
set.add(jewels[i])
}

for (j=0;j<stones.length;j++)
{
    if (set.has(stones[j]))
    {
        count++;
    }
}
return count;
};


//========================
// brute force solution

/**
 * @param {string} jewels
 * @param {string} stones
 * @return {number}
 */
var numJewelsInStones = function(jewels, stones) {
    
    let count=0;
    for (let i=0;i<stones.length;i++)
    {
        for (let j=0;j<jewels.length;j++)
         {
        if(stones[i] === jewels[j])
        {count++;
        break;
        }
    }
    }
    return count;
};