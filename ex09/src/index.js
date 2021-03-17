function functionElse(num)
{
if(num <= 5)
{
  return "5 or smaler";
} 
else
{
  return "Bigger then 5";
 
}
}
console.log(functionElse(4));
console.log(functionElse(5));
console.log(functionElse(6));
console.log(functionElse(10));
functionElse();
module.exports = functionElse;