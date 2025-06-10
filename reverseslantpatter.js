for (let i = 1; i <= 5; i++)
{
    let row = "";
    for (let j = 1; j <= 5; j++)
    {
        if (j >= 6 - i)
            row = row + "*";
        else
            row=row+"_"
    }
    console.log(row);
}
     

//   *
//  **
// ***

for (let i = 1; i <= 5; i++)
{
    let row = "";
    for (let j = 1; j <= (5-i); j++)
    {
      row=row+"-";
    }
  for (let j = 1; j <= i; j++)
    {
      row=row+"*"; 
    }
    console.log(row);
}
    