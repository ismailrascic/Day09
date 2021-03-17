function switchCase(animals)
{
    var animals;
 switch(animals)
 {
   case "a":
    return "antelope";
   break;
   case "b":
    return "bird";
   break;
   case "c":
    return "cat";
   break;
   default:
    return"stuff";
   break;
 }
 return animals;
}
console.log(switchCase("a"));
console.log(switchCase("b"));
console.log(switchCase("c"));
console.log(switchCase("d"));
console.log(switchCase(4));
module.exports=switchCase;