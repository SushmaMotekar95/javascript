const array=[10,5,'a','b','h',11];
const noArray=[];
const alphabetArray=[];
console.log("\n- Given Array :=> ",array);
array.forEach((element)=>{
    if(element=='10'||element=='5'||element=='11')
    {
        noArray.push(element);
    }
    if(element=='a'||element=='b'||element=='h')
    {
        alphabetArray.push(element);
    }
});
    
//sort number array
noArray.sort((n1,n2)=>{
   return n1>n2?1:-1;
});
console.log("\n- Numbers :=> ",noArray);

//sort alphabet array
alphabetArray.sort();
console.log("\n- Alphabets :=> ",alphabetArray);
