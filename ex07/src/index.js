function logicaAndOperator(num)
{
  if (num <= 80 && num >= 40)
  {
      return "Yes";
  }
   return "No";
} 
console.log(logicaAndOperator(0));
console.log(logicaAndOperator(24));
console.log(logicaAndOperator(45));
console.log(logicaAndOperator(57));
console.log(logicaAndOperator(100));
logicaAndOperator();
module.exports=logicaAndOperator;