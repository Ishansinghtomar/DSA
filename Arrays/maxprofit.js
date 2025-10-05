var maxProfit = function (prices) {
    let maxprofit = 0;
    let min = prices[0];
    for (let i = 0; i < prices.length; i++) {

        if ((prices[i] - min) > maxprofit)
            maxprofit = prices[i] - min;

        if (prices[i] < min)
            min = prices[i];
    }
    return maxprofit;
}

let arr = [7, 6, 4, 3, 1];
console.log(maxProfit(arr));

// Brute force 
// /**
//  * @param {number[]} prices
//  * @return {number}
//  */
// var maxProfit = function(prices) {
    
// let max=0;
// for (let i=0;i<prices.length;i++)
// {
//     for (let j=i+1;j<prices.length;j++)
//     {
//         if ((prices[j]-prices[i])>max)
//        max=prices[j]-prices[i];
//     }
// }
// return max;
// }