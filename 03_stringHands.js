function stringHandOn()
{
    console.log("-- 1) Task --");
    var string1="    Hey you are doing good, keep it up  ";
    console.log(`String is:=>${string1}`);

    console.log("\n-- 2) Task --");
    var string_length=string1.length;
    console.log(`Length of Given String is:=>${string_length}`);
    
    console.log("\n-- 3) Task --");
    var string_trim=string1.trim();
    var string_length1=string_trim.length;
    console.log(`Remove extra spaces of given String is:=>${string_trim}`);
    console.log(`Length of Remove extra spaces in given String is:=>${string_length1}`);

    console.log("\n-- 4) Task --");
    var countExtraSpace=string_length-string_length1;
    console.log(`Total no. of Extra Spaces in Given string:=>${countExtraSpace}`);

    console.log("\n-- 5) Task --");
    var firstChar=string_trim.charAt(0);
    console.log(`Fist Character of given string(Remove extra spaces):=>${firstChar}`);
    var lastChar=string_trim.charAt(string_length1-1);
    console.log(`Last Character of given string(Remove extra spaces):=>${lastChar}`);

    console.log("\n-- 6) Task --");
    var countSplit=string_trim.split(" ");
    var countWord=countSplit.length;
    console.log(`Total words available in the string:=>${countWord}`);

    console.log("\n-- 7) Task --");
    var indexOfWord=string1.indexOf("good");
    console.log(`Index of word "good" is:=>${indexOfWord}`);

    console.log("\n-- 8) Task --");
    var subString=string1.slice(22);
    console.log(`Substring starting from index 22:=>${subString}`);

    console.log("\n-- 9) Task --");
    var endWith=string_trim.endsWith("up");
    console.log(`String ends with word "up":=>${endWith}`);

    console.log("\n-- 10) Task --");
    var startWith=string_trim.startsWith("Hey");
    console.log(`String starts with word "Hey":=>${startWith}`);

}

stringHandOn();