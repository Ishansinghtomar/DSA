function largest(arr) {
    let a = arr[0];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > a)
            a = arr[i];
    }
    return a;
}
let array = [8, -9, -10, 0, 672];
console.log(largest(array));

//-Infinity 