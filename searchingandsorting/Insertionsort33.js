function insertionsort(arr)
{
  let current, p;
  for (let i = 1; i < arr.length; i++)
  {
    current = arr[i];
    p = i - 1;

    while (current < arr[p] && p >= 0)
    {

      arr[p + 1] = arr[p];
      p--;
}

    arr[p+1] = current;
  }return arr

}
let arr = [7, 6, 1, 3, 8];
console.log(insertionsort(arr));