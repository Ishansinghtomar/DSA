var reverseString = function(s) {
    let a=Math.floor((s.length));
    let temp='';
  for(let i=0;i<a/2;i++)
  {
     temp=s[i];
     s[i]=s[a-1-i];
     s[a-1-i]=temp;
  }

};