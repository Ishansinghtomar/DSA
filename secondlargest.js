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

/////////////////////////////////////////////////
function slarge(arr)
{
  let lrg =-Infinity
   let  slrg = -Infinity
  for (let i = 0; i < arr.length; i++)
  {
    if (arr[i] > lrg)
    {
      slrg = lrg;
      lrg=arr[i]
    }
    else if (arr[i]> slrg && (arr[i]!=lrg))
    {
      slrg=arr[i]

    }
  }
  return slrg;
}

let arr1 = [7, 7, 8, 66, 66, 9, -2, -7]
console.log(slarge(arr1));