console.log("/*******Function with no Argument********/");
function htmlcss()
{
    console.log("Welcome to HTML5 & CSS3");
}
htmlcss()
function javascript()
{
    console.log("Welcome to JavaScript");
}
javascript()

console.log("\n/*******Personal Details********/");
function personalDetails(firstName,lastName,collegeName)
{
    console.log("First Name:=>",firstName,"\nsecond Name:=>",lastName,"\nCollege Name:=>",collegeName);
}
personalDetails("Sushama","Motekar","D.N. College,Faizpur")

console.log("\n/**********Swap Two Variable************/")
function swapValuesDude(name1,name2)
{
    console.log("--Before Swap value--");
    console.log("1st value:=>",name1,"\n2nd value:=>",name2);
    console.log("--After Swap value--");
    var temp
    temp=name1
    name1=name2
    name2=temp
    console.log("1st value:=>",name1,"\n2nd value:=>",name2,"\n");
}

swapValuesDude("Virat","Anuska")
swapValuesDude(1000,2000)

console.log("/********Add Three Values*******");
function addThreeValues(a,b,c)
{
    console.log("1st value:=>",a,"|| 2nd value:=>",b," || 3rd value:=>",c);
    var d 
    d = a + b + c
    console.log("Result:=>",d)
}
addThreeValues(10.23,600,40)
addThreeValues("Hello"," Good"," Morning")