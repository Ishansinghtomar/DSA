var removeElement = function (nums, val) {

    let x = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== val) {
            nums[x] = nums[i]
            x = x + 1;
        }
    }
    console.log(nums)
    return x;
};

let arr = [0, 1, 1, 2, 23, 333, 444, 444, 5677]

console.log(removeElement(arr,2))