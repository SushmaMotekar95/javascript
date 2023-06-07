console.log(`------------------Filter()---------------------------`);
const arrayNumbers=[20,11,40,25,37,49,9,90,60,2,19];
console.log(`\n- Given array is :=> [${arrayNumbers}]`);

console.log(`\n---------1) Numbers are greater than 50 in array-----`);
const greater50=arrayNumbers.filter((element)=>
{
    return element>50
})
console.log("- ",greater50);

console.log(`\n---------2) Even numbers in array-------------------`);
const evenNo=arrayNumbers.filter((element)=>
{
    return element%2==0
})
console.log("- ",evenNo);

console.log(`\n---------3) Odd numbers in array--------------------`);
const oddNo=arrayNumbers.filter((element)=>
{
    return element%2!==0
})
console.log("- ",oddNo);

console.log(`\n---------4) Multiple of 5 numbers in array-----------`);
const fiveMultiple=arrayNumbers.filter((element)=>
{
    return element%5==0
})
console.log("- ",fiveMultiple);

console.log(`\n---------5) Numbers between 20 and 50 in array------`);
const twentyFiftyBetween=arrayNumbers.filter((element)=>
{
    return (element>=20 && element<=50)
})
console.log("- ",twentyFiftyBetween);



