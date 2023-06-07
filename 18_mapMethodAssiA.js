console.log(`-------------------------Map() Method---------------------------`);
const arrayNumbers=[20,11,40,25,23,11,9,31,60,2,19];
console.log("- Given array:=>" ,arrayNumbers);

console.log(`\n----------1) Add 10 into each element in new array------------`);
const arrayTrans=arrayNumbers.map((element,index)=>{
    return element+10;
})
console.log("- ",arrayTrans);

console.log(`\n----------2) Square of each element in new array------------`);
const arrayTrans1=arrayNumbers.map((element,index)=>{
    return element*element;
})
console.log("- ",arrayTrans1);

console.log(`\n--------1) Add index value into each element in new array------`);
const arrayTrans2=arrayNumbers.map((element,index)=>{
    return element+index;
})
console.log("- ",arrayTrans2);

