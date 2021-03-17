function comparasionToEqual(a)
{
   if(a<5)
    { 
      return "Less than 5";
    }
    if(a < 10)
    { 
      return " Less than 10";
    }
    if(a > 20)
    { 
      return "More then 20";
    }

   
    if ( a >= 10 )
    { 
      return " 10 or over";
    }
    
 


}
console.log(comparasionToEqual(0));
console.log(comparasionToEqual(5));
console.log(comparasionToEqual(17));
console.log(comparasionToEqual(21));

comparasionToEqual();
module.exports = comparasionToEqual;