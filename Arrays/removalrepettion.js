var removeDuplicates = function (nums) {
    let x = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[x] < nums[i]) {
            x = x + 1;
            nums[x] = nums[i];
        }
    }
    console.log(arr);
    return x + 1;
};

let arr = [0, 1, 1, 2, 23, 333, 444, 444, 5677]

console.log(removeDuplicates(arr))