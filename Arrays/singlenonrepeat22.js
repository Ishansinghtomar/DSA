
  var singleNumber = function(nums) {
      let xor = 0;
      for (let i = 0; i < nums.length; i++) {
          xor = xor ^ nums[i];
      }
      return xor;
  };
   
// var singleNumber = function(nums) {
//   let a={};
//   for(let i=0;i<nums.length;i++)
//   {
// if(!a[nums[i]])
// {
//     a[nums[i]]=1;
// }
// else
// ++a[nums[i]];
//   }

// for (let i=0;i<nums.length;i++)
// {
//     if(a[nums[i]]===1)
//     return nums [i];
// }
// };