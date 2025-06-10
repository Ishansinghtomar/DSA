var removeDuplicates = function (nums) {
    let arr1 = [];
    for (let i = 0; i < nums.length; i++) {
        if (i===0 || nums[i] != nums[i-1]) {
          arr1.push(nums[i]);
        }
    }
    return arr1;
};

let arr = [0, 1, 1, 2, 23, 333, 444, 444, 5677]

console.log(removeDuplicates(arr))