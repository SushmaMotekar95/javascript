console.log(`------1) Display index and element---------`);
const arrayNumbers=[1,-7,40,502,-77,91,0,108,89,-601];
arrayNumbers.forEach( (element,index)=>{
    console.log(`- Index:=> ${index}  , Element:=>  ${element}`);
   
})

let str="";
console.log(`\n-------2) Positive numbers in array-------`);
arrayNumbers.forEach( (element)=>{
    if(element>0)
    //console.log(`- Element:=> ${element}`);
    str=str+element+', ';
})
console.log(`Postive number :=> ${str}`);

console.log(`\n-------3) Negative numbers in array---------`);
const negativeNo=[];
arrayNumbers.forEach( (element)=>{
    if(element<0)
    negativeNo.push(element);
})
console.log("array:=>",negativeNo);

let str1="";
console.log(`\n-------4) Even numbers in array-------------`);
arrayNumbers.forEach( (element)=>{
    if(element%2==0)
    //console.log(`- Element:=> ${element}`);
    str1=str1+element+", ";
})
console.log(`Even Numbers :=> ${str1}`);

let sum=0;
console.log(`\n-------5) Sum of all numbers in array--------`);
arrayNumbers.forEach( (element)=>{
    sum=sum+element;
})
console.log(`- Sum:=> ${sum}`);

console.log(`\n-------6) Even indexed numbers in array-------`);
arrayNumbers.forEach( (element,index)=>{
    if(index%2==0)
    console.log(`- Index:=> ${index} , Element:=> ${element}`);

})

