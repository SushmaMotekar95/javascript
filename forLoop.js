function reverseword(str)
{
    console.log(`Given String is:=> ${str}`);
    var reverseString="";
    for(let index=str.length-1; index>=0; index--)
    {
        var char=str.charAt(index);
        reverseString=reverseString.concat(char);
    }
    console.log(`Reverse String is:=> ${reverseString}`);

}
reverseword("JavaScript");
reverseword("Google Chrome");
reverseword("Developer");

console.log(`\n--------------3) Odd Position character---------\n`);
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

