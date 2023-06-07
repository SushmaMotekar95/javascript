const array=[1,3,5,2,19,123,34,56,78,100];
console.log("- Given array is:=>",array);
const primeArray=[];
array.forEach((element)=>{
    let isPrime=true;
    for (let index=2;index<element;index++)
    {
        if(element%index==0)
        {
            isPrime=false;
            break;
        }
    }
    if(isPrime)
    {
        primeArray.push(element);
    }

})
console.log("- Prime number array:=>",primeArray);

