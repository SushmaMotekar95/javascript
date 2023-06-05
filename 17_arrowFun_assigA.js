console.log(`\n1) With no args and no return value,log meassage on console inside arrow function`);
let str=() => {
  console.log(`- "Good Morning, Today is Monday"`);
}
str();

console.log(`\n2) With 3 args and no return value,for received 3 parameters perform the multiplication`);
let multiply=(n1,n2,n3=1)=>{
    let result=n1*n2*n3;
    console.log(`- Multiplication of "${n1}*${n2}*${n3}" :=> ${result}`);
}
multiply(5,5,2);
multiply(10,4);

console.log(`\n3) With 5 args and return value such as, for received parameters it should do the addition`);
let addition=(num1,num2,num3,num4,num5)=>{
    let result=num1+num2+num3+num4+num5;
    return result;
}
let result1=addition(100,100,200,349,756);
console.log(`- Addition "100+100+200+349+756" :=> ${result1}`);
let result2=addition("I am ","learning ","ES6 ","features ","in depth");
console.log(`- String addition :=> "${result2}"`);