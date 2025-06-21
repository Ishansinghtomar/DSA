function selectsort(arr)
{
  let min,temp;
  let n = arr.length;
  for (let i = 0; i < n - 1; i++)
  {
    min = i;
    for (let j = i + 1; j < n; j++)
    {
      if (arr[j] > arr[min])
        min = j;
    }
    temp = arr[i];
    arr[i] = arr[min];
    arr[min] = temp;
  }
  return arr;
}
let arr = [1, 2, 3, 4, 5];
console.log(selectsort(arr));