console.log(`---------------------------While Loop----------------------------`);
console.log(`1) Write a program to print numbres from "5 to 15" by incrementing 1`);
var i=5;
let str='';
while(i<=15)
{
    str=str+i+'  ';
    i++;
}
console.log(` - ${str}`);

console.log(`\n2) Write a program to print numbres from "50 to 40" by decrementing by 1`);
var j=50;
let str1='';
while(j>=40)
{
    str1=str1+j+'  ';
    j--;
}
console.log(` - ${str1}`);

console.log(`\n3) write a program to find "first 15 odd" numbers`);
var k=1;
let str2='';
while(k<=30)
{
    if(k%2!==0)
    {
        str2=str2+k+'  ';
    }
    k++;
}
console.log(` - ${str2}`);

console.log(`\n4) write a program to find "first 10 even" numbers`);
var m=0;
let str3='';
while(m<20)
{
    if(m%2==0)
    {
        str3=str3+m+'  ';
    }
    m++;
}
console.log(` - ${str3}`);

console.log(`\n5) write a program to print table of "5" like -> 5 10 15......50`);
var a=5;
let str4='';
while(a<=50)
{
    str4=str4+a+'  ';
    a=a+5;
}
console.log(` - ${str4}`);

console.log(`\n6) write a program to print table of "10" like -> 10 20 30......100`);
var b=10;
let str5='';
while(b<=100)
{
    str5=str5+b+'  ';
    b=b+10;
}
console.log(` - ${str5}`);

console.log(`\n7) write a program to print table of "10" in reverse order like -> 100 90 80......10`);
var c=100;
let str6='';
while(c>=10)
{
    str6=str6+c+'  ';
    c=c-10;
}
console.table(`- ${str6}`);


