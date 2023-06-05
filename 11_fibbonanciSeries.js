let n1=0;
let n2=1;
var str="";
let str1=0,str2=1;

for(let i=2;i<=15;i++)
{
    var next=n1+n2;
    str=str+next+" ";
    //console.log(`${str}`);
    n1=n2;
    n2=next;
    
}
console.log(`\nFibonacci series:=> ${str1} ${str2} ${str}`);