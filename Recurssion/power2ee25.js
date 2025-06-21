function power(n)
{
  if (n == 1)
    return 1;
  if (n < 1)
    return 0 
   
  return power(n/2)  
}

console.log(power(16))