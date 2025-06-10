function secondlargest(arr) {
    let largest = -Infinity;
    let secondlargest = -Infinity;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] >largest) {
            secondlargest = largest;
            largest = arr[i];
        }
    }
    return secondlargest;
}
let array = [78, 42, 11, 9, 0, 88, -7]
console.log("Slargest"+secondlargest(array))