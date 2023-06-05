/*function reverseString(str)
{
    var string=" ";
    var index;
    var lrn=str.length;
    console.log(`length=${lrn}`);

    var word=str.split(" ");
    console.log(word);
    console.log(`length of split word:=>${word.length}`);
    var revword=word.reverse();
    console.log(revword);
    var len=revword.length;
    console.log(len);
    var join=revword.join(" ");
    console.log(join);
    for(index=0;index<join.length;index++)
    {
        var char=join.charAt(index);
        if(index==0||index==lrn-1)
        {
            var char=char.toUpperCase();
        }
        else if(char==' ')
        {
            var index1=index-1;
            var newChar=join.charAt(index1);
            var char=newChar.toUpperCase();
        }if(char=='')
       {
           /* var index1=char;
            //console.log(char);
            var index2=index+1;
            var newChar1=join.charAt(index2);
            var char=newChar1.toUpperCase();
        }
        string=string.concat(char);

    }
    console.log("Reverse string:=>",string);
}
reverseString("Hello how are you doing");*/



function reverseWord(string)
{
    let finalString="";
    console.log(`Given string :=> "${string}"`);
    for(let index1=0;index1<=string.length-1;index1++)
    {
        let char=string.charAt(index1);
        let beforeChar=string.charAt(index1+1);
        let afterChar=string.charAt(index1-1);
        if(index1==0 ) 
        {
            char=char.toUpperCase();
        }
        if(index1==string.length-1)
        {
            char=char.toUpperCase();
        }
        if(beforeChar==" ")
        {
             char=char.toUpperCase();
        }
        if(afterChar==" ")
        {
             char=char.toUpperCase();
        }
        finalString=finalString.concat(char);
    }
    console.log(`Convert First & Letter to Capital in String :=> "${finalString}"`);

    let reverseString="";
    for(let index=finalString.length-1;index>=0;index--)
    {
        let char=finalString.charAt(index);
        reverseString=reverseString.concat(char);

    }
    console.log(`Reverse String:=> "${reverseString}"`);

}
reverseWord("hello how are you doing");