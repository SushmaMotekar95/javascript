console.log(`---------------------Array---------------------`);
const arrayNumbrs=[20,31,40,25,23,11,29,9,60,2,11];
console.log(`- Given array :=> [${arrayNumbrs}]\n`);

var len=arrayNumbrs.length;
console.log(`1) Find the total elements in array :=> ${len}\n`);

var first=arrayNumbrs[0];
var last=arrayNumbrs[len-1];
console.log(`2) First element & last element in array`);
console.log(` - "First" element in array :=> ${first}`);
console.log(` - "Last" element in array :=> ${last}`);

var thirdLast=arrayNumbrs[len-3];
console.log(`\n3) "Third Last" element in array :=> ${thirdLast}`);

console.log(`\n4) All "Even" numbers in array`);
for(let index=0;index<len;index++)
{
    if(arrayNumbrs[index]%2==0)
    {
        console.log(` - Even number :=> ${arrayNumbrs[index]}`);
    }
}

console.log(`\n5) All "Odd" numbers in array`);
for(let index=0;index<len;index++)
{
    if(arrayNumbrs[index]%2!==0)
    {
        console.log(` - Odd number :=> ${arrayNumbrs[index]}`);
    }
}

var temp=0;
for(let index=0;index<len;index++)
{
    if(index%2==0)
    {
        temp = temp + arrayNumbrs[index];
    }
    
}
console.log(`\n6) Sum of all "Even" position elements in array :=> ${temp}`);

var temp=0;
for(let index=0;index<len;index++)
{
    if(index%2!==0)
    {
        temp = temp + arrayNumbrs[index];
    }
    
}
console.log(`\n7) Sum of all "Odd" position elements in array :=> ${temp}`);

var temp=0;
for(let index=0;index<len;index++)
{
     temp = temp + arrayNumbrs[index]; 
}
console.log(`\n8) Sum of all elements in array :=> ${temp}`);

console.log(`\n9) Numbers Which is multiple of "5"`);
var temp=0;
for(let index=0;index<len;index++)
{
    if(arrayNumbrs[index]%5==0)
    {
        console.log(` - Number :=> ${arrayNumbrs[index]}`);
    }
}

var avilable=arrayNumbrs.includes(115);
console.log(`\n10) Number "115" is available in array :=> ${avilable}`);

var avilable1=arrayNumbrs.includes(23);
console.log(`\n11) Number "23" is available in array :=> ${avilable1}`);

arrayNumbrs.splice(3,0,55,66);
console.log(`\n12) Insert numbers "55", "66" before index "3" :=> [${arrayNumbrs}]`);

arrayNumbrs.splice(4,3);
console.log(`\n13) Delete "3" element starting from index "4" :=> [${arrayNumbrs}]`);








