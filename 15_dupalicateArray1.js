console.log(`-------Remove duplicate element from array------`);
const arrayNum=[11,3,4,11,4,7,3];
console.log("- Given array :=> ",arrayNum);
arrayNum.sort();
const array=[];

 for(let i=0;i<arrayNum.length;i++)
 {
    if(arrayNum[i]==arrayNum[i+1])
    {
        array.push(arrayNum[i]);

        arrayNum.splice(i,1);
    }
 }
 console.log("- Duplicates elements in array :=> ",array);
 console.log("- Remove Duplicate Element in array :=> ",arrayNum);
 console.log(`------------------------------------------------`);