function logicaAndOperator(num)
{
  if (num > 30 || num < 20)
  {
      return "Out";
  }
   return "In";
} 
console.log(logicaAndOperator(0));
console.log(logicaAndOperator(9));
console.log(logicaAndOperator(20));
console.log(logicaAndOperator(23));
console.log(logicaAndOperator(30));
console.log(logicaAndOperator(31));
console.log(logicaAndOperator(105));
logicaAndOperator();
module.exports=logicaAndOperator;