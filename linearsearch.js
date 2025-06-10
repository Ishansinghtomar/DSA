function linear(arr, srch) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == srch)
            return (i + 1);

    }
    return -1;
}
let array = [8, 9, 10, 11, 672];
console.log(linear(array, 9));
