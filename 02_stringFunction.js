function stringHandOn()
{
    var string1="   Hey you are doing good, keep it up  ";
    console.log("String is:=>",string1);

    var string_length=string1.length;
    console.log("Length of Given String is:=>",string_length);

    var string_trim=string1.trim();
    var string_length1=string_trim.length;
    console.log("Remove extra spaces of given String is:=>",string_trim);
    console.log("Length of Remove extra spaces in given String is:=>",string_length1);

    var countExtraSpace=string_length-string_length1;
    console.log("Total no. of Extra Spaces in Given string:=>",countExtraSpace);

    var firstChar=string_trim.charAt(0);
    console.log("Fist Character of given string(Remove extra spaces):=>",firstChar);
    var lastChar=string_trim.charAt(string_length1-1);
    console.log("Last Character of given string(Remove extra spaces):=>",lastChar);
}
stringHandOn();