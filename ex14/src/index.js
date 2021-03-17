function myForLoop1(evenNumbers)
{
    
    for(var evenNumbers = 0; evenNumbers <= 8; evenNumbers=evenNumbers + 2 )
    {
       console.log(evenNumbers) ;
    }


}
function myForLoop2()
{
    for(var evenInverseNumbers = 8 ;evenInverseNumbers < 0; evenInverseNumbers = evenInverseNumbers-2 )
    {
        console.log(evenInverseNumbers);
    }
}


myForLoop1();
myForLoop2();

module.exports={
myForLoop1,
myForLoop2

};