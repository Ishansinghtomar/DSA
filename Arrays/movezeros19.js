var moveZeroes = function(nums) {
    let x=0;
    for (let i=0;i<nums.length;i++)
    {
        if(nums[i] != 0)
        {
            nums[x]=nums[i];
            x=x+1;
        }
    }
    for(let j=x;j<nums.length;j++)
    {
        nums[j]=0;
    }
    
};