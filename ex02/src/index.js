function myFunction(myParameter)
{
    
    if(myParameter)
     
     {
         return "The parametar is true!";
    };
     
    {
        return "The parametar is false!"};
}

console.log(myFunction(true));
console.log(myFunction(false));

module.exports = myFunction;