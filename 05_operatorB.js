console.log(`--1)Task--`);
var greaterNumber=function(num1,num2)
{
  var greaterNo=num1>num2?num1:num2;
  return greaterNo
}
var result=greaterNumber(10,-10);
var result=(result=10)?`Greater no. in (10,-10) is:=> ${result}`:`Greater no. in (10,-10) is:=> ${result}`;
console.log(result);
var result1=greaterNumber(800,899);
var result=(result=899)?`Greater no. in (800,899) is:=> ${result}`:`Greater no. in (800,-899) is:=> ${result}`;
console.log(result);

console.log(`\n--2)Task--`);
var isEvenOddNum=function(num1)
{
  var result2=(num1%2==0)?true:false;
  return result2;
}
var result3=isEvenOddNum(29);
var res=(result3==true)?"29 is :=> Even Number":"29 is :=> Odd Number"
console.log(`${res}`);

var result4=isEvenOddNum(44);
var res=(result4==true)?"44 is :=> Even Number":"44 is :=> Odd Number"
console.log(`${res}`);

var result5=isEvenOddNum(0);
var res=(result5==true)?"0 is :=> Even Number":"0 is :=> Odd Number"
console.log(`${res}`);

var result6=isEvenOddNum(101);
var res=(result6==true)?"101 is :=> Even Number":"101 is :=> Odd Number"
console.log(`${res}`);

console.log(`\n--3)Task--`);
var wordLength=function(string)
{
    var len=string.length;
    console.log(`${string} Length is:=> ${len}`);
    var wordLength1=(len%2==0)?true:false;
    return wordLength1;
}

var result6=wordLength("JavaScript");
var res=(result6==true)?"JavaScript Length is :=> Even ":"JavaScript Length is :=> Odd"
console.log(`${res}`);

var result7=wordLength("developer");
var res=(result7==true)?"developer Length is :=> Even ":"developer Length is :=> Odd"
console.log(`${res}`);

var result8=wordLength("Google");
var res=(result8==true)?"Google Length is :=> Even ":"Goole Length is :=> Odd"
console.log(`${res}`);







