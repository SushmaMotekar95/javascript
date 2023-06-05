console.log(`-----------------------------------------`);
const str="How are you mate";
console.log(`Given String:=> "${str}"`);
let string="";
 for(index=0;index<=str.length-1;index++)
 {
    var char=str.charAt(index);
    var char1=str.charAt(index+1);
    var char2=str.charAt(index-1);
    
    //console.log(char);
    if(char1==" ")
    {
        //var char=str.charAt(index-1);
        var char=char.toUpperCase();
        //str.splice(index-1,0,char);
    }
    if(char2==" ")
    {
        //var char=str.charAt(index+1);
        var char=char.toUpperCase();
        //str.splice(index+1,0,char);

    }
    string=string.concat(char);

 }
 console.log(`Updated String:=> "${string}"`);
 console.log(`---------------------------------------`);