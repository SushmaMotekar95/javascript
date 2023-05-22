console.log(`------------1) Total Number of vowels----------\n`);
function countVowel(str)
{
    var count=0;
    console.log(`String is :=> "${str}"`);
    var str=str.toLowerCase();
    for(let index=0;index<str.length;index++)
    {
        var char=str.charAt(index);
        if(char=='a'||char=='i'||char=='o'||char=='e'||char=='u')
        {
           count++;
        }
        
    }
    console.log(`Total no. of "vowels" in string :=> ${count}`);
    console.log(`\n-----------------------------------------------`);
    
}
countVowel("I am very good IT Developer");

console.log(`\n------------2) Sum of cube of Numbers----------\n`);
function cubeOfNumber(num) 
{
    var temp=0;
    for(let i=1;i<=num;i++)
    {
        cube=i*i*i;
        console.log(`Cube of ${i} :=> ${cube}`);
        temp=temp+cube;
    }
    console.log(`\n********** Sum of cube of 1 to 5 **********`);
    console.log(`1*1*1 + 2*2*2 + 3*3*3 + 4*4*4 + 5*5*5 :=> ${temp}`);
    
}
cubeOfNumber(5)
console.log(`\n----------------------------------------------\n`);


console.log(`--------------3) Odd Position character---------\n`);

function oddPositionChars(str)
{
    var reverseString="";
    console.log(`- String is :=> "${str}"`);
    for(var index=0; index<str.length;  index++)
    {
        var char=str.charAt(index);
        if(index%2!==0 && char !=' ')
        {
            reverseString=reverseString.concat(char);
        }
    }
    console.log(`- Odd positioned charaters :=> ${reverseString}\n`);
    
}
oddPositionChars("Hard work always pays back");
oddPositionChars("Soon I wil be Angular IT");
console.log(`--------------------------------------------------\n`);

