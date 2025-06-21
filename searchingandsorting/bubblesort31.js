function bubblesort(arr)
{

  let n = arr.length;
  let temp,count;
  for (let i = 0; i < n - 1; i++)
  {
     count = 0;
    for (let j = 0; j < n - i - 1; j++)
    {
      if (arr[j] < arr[j + 1])
      {
        temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
       count++;
      }
    }
     if (count == 0)
     break;
  }
  return arr;
}
let arr = [1, 2, 3, 4, 5];
console.log(bubblesort(arr));