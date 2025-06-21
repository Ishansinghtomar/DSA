function linear(arr, target) {

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == target)
      return i;
  }
  return -1
}
let arr1 = [6, 9, 8, 0,0]
console.log(linear(arr1, 7));