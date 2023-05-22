console.log(`---Implicit string conversion to Number--`);
var result;
result = '3'+2;
console.log(result);// result=32

result = '3'+true;
console.log(result);// result=3true

result = '3'+undefined;
console.log(result);// result=3undefined

result = '3'+null;
console.log(result);// result=3null


console.log(`---- implicit boolean conversion to number---`);
var result;

result='4'-true;
console.log(`Result:=> ${result}`); // result=3

result=4+true;
console.log(`Result:=> ${result}`); // result=5

result=4+false;
console.log(`Result:=> ${result}`); // result=4

result=true-true;
console.log(`Result:=> ${result}`); // result=1

console.log(`---- Implicit string conversion to Number---`);
var result1;
result1='4'-'2';
console.log(`Result:=> ${result1}`); //Result=2

result1='4'-2;
console.log(`Result:=> ${result1}`);//Result=2

result1='4'*2;
console.log(`Result:=> ${result1}`);//Result=8

result1='4'*`2`;
console.log(`Result:=> ${result1}`);//Result=8

result1='4'/2;
console.log(`Result:=> ${result1}`);//Result=2

result1='4'/`2`;
console.log(`Result:=> ${result1}`);//Result=2

console.log(`---- Undefined used with number,boolean or null given Nan---`);
var result1;
result1=4+undefined;
console.log(`Result :=> ${result1}`);//Result=NaN

result1=4-undefined;
console.log(`Result :=> ${result1}`);//Result=NaN

result1=true+undefined;
console.log(`Result :=> ${result1}`);//Result=NaN

result1=null+undefined;
console.log(`Result :=> ${result1}`);//Result=NaN
