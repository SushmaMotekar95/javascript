console.log(`----Fcatorial of Given Number----\n`);
function factorialOfNum(num1)
{
    var factorial=1;
    if(num1==undefined || num1==null || isNaN(num1))
    {
        var result=console.log(`- ${num1} :=> "Invalid Data"\n`);
        
    }
    else if(num1==0  || num1==1)
    {
        var result=console.log(`- Factorial of "${num1}" is :=> 1\n`);
    }
    else
    {
        for(let index=num1; index>=1; index--)
        {
            factorial=factorial*index;
        }
        var result=console.log(`- Factorial of "${num1}" is :=> ${factorial}\n`);
    }
    return result;
}
    
factorialOfNum(5);
factorialOfNum(3);
factorialOfNum(null);
factorialOfNum(8);
factorialOfNum(undefined);
factorialOfNum(9);
factorialOfNum(0);