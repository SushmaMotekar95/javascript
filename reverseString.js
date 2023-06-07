function reverseString(str)
{
    var str1=" ";
    for(var index=str.length;index>=0;index--)
    {
        var char=str.charAt(index);
        var str1=str1.concat(char);
    }
    
    console.log(str1);  
   


}
reverseString("I am sushama");