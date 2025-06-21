let arr = [6, 8, 9, 5, 1, 0, -5];

function oddsum(n)
{
  let p = arr[n] % 2 !=0
  console.log(p)
if (n == 0)
  return p ? arr[0]:0;
return p? arr[n] + oddsum(n - 1):oddsum(n - 1);
}
console.log(oddsum(arr.length-1))
