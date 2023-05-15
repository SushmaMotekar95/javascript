console.log("--1) Task --");
var square=function(a)
{
    var result=a*a;
    //return`Square of ${a} is:=>${result}`
    return result;
}
var result1=square(5);
//console.log(result1);
var result2=square(6);
//console.log(result2);
var result3=square(25);
//console.log(result3);
var result4=square(100);
console.log(`Square of (5, 6, 25 & 100) is:=> ${result1} ${result2} ${result3} ${result4}`);

console.log(`\n--2) Task --`);
var typeOfFunction=typeof(square);
console.log(`type of Function is:=> ${typeOfFunction}`);

console.log(`\n--3) Task --`);
var areaOfRect=function(length,width)
{
    var area=length*width;
    return`Area of Reactangle is:=> ${area}`
}
var area1=areaOfRect(499,917);
console.log(area1);

console.log(`\n--4) Task --`);
console.log("**Swap Two Variable**");
var swapValuesDude=function(name1,name2)
{
    console.log(`Before Swap value:=>${name1} ${name2}`);
    var temp
    temp=name1
    name1=name2
    name2=temp
    return (`After Swap value :=>${name1} ${name2}`);
}

var swap1=swapValuesDude("Virat","Anuska")
console.log(swap1);
var swap2=swapValuesDude(1000,2000)
console.log(swap2);

console.log(`\n--5) Task --`);
var functionExp=function(string2)
{
    
    console.log(`Given string is:=> ${string2}`);

    console.log(`--5(A) Task --`);
    var totaLength=string2.length;
    console.log(`Total character available in the string:=>${totaLength}`);

    console.log(`--5(B) Task --`);
    var charindex6=string2.charAt(6);
    console.log(`Character at index 6 is:=>${charindex6}`);

    console.log(`--5(C) Task --`);
    var charIndex11=string2.charAt(11);
    console.log(`Character at index 11 is:=>${charIndex11}`);
    
    console.log(`--5(D) Task --`);
    var lastChar1=string2.charAt(totaLength-1);
    console.log(`Last character is:=>${lastChar1}`);

    console.log(`--5(E) Task --`);
    var newLength=totaLength-totaLength;
    var FirstChar=string2.charAt(newLength);
    console.log(`First character is:=>${FirstChar}`);

    console.log(`--5(F) Task --`);
    var splitWord=string2.split(" ");
    var countSplitWord=splitWord.length;
    console.log(`Total Number of words is:=>${countSplitWord}`);

    var squareOfWord=countSplitWord*countSplitWord;
    return(`Square of total number of words is:=>${squareOfWord}`);
}
var resultFB=functionExp("JS the most popular language of internet");
console.log(resultFB);

