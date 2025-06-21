let n = 10;
function count(x)
{
  if (x > n)
    return;
  console.log(x);
  count(++x);
}
count(1);