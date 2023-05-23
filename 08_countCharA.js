console.log(`-----------------------To count character 'a' or 'A'------------------------\n`);
function countCharA(str)
{ 
    var count=0;
    console.log(`- Given String is :=> "${str}"`);
    var string=str.toLowerCase();
    var len=string.length;
    
    for(var index=0;index<len;index++)
    {
        var char=string.charAt(index);
        if(char=='a')
        {
            count++;
        }
        
    }
    var str1=console.log(`- Total No. of charaters('a'||'A') in the Given string is :=> ${count}\n`);
    return str1;
}
countCharA("I AM Learning JavaScript, The Lanuage of internet");
countCharA("My favourite movie is LAggAn");
console.log(`----------------------------------------------------------------------------`);