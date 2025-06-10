function negative(arr) {
    let a = 0;
    for (let i = 0; i < arr.length; i++)
    {
        if (arr[i] < 0)
        a++
    }
    return a;
}
let array = [8, -9, -10, 0, 672];
console.log(negative(array));
