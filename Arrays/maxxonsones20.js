var findMaxConsecutiveOnes = function(nums) {
let max =0;
let sum=0;
for (let i=0;i<nums.length;i++)
{

sum=nums[i]? ++sum:0;
max=sum>max?sum:max; 
}
return max;
}
