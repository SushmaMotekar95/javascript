
console.log(`--1) Task --`);
function squareOfWordLength(lenth)
{
    var length1=lenth.length;
    console.log(`Length of "${lenth}" word is:=> ${length1}`);
    var square=length1*length1;
    console.log(`Square of "${lenth}" word is:=> ${square}`);
}
squareOfWordLength("JavaScript");
squareOfWordLength("Google Chrome");
squareOfWordLength("Developer Smart");

console.log(`\n--2) Task --`);
function multdiv()
{
    var string="I am Angular Developer";
    console.log(`Given string is:=> ${string}`);
    var stringLength=string.length;
    console.log(`Length of given string:=> ${stringLength}`);
    var splitWord=string.split(" ");
    var countSplitWord=splitWord.length;
    console.log(`Total no. of word available in string is:=> ${countSplitWord}`);
    console.log(`Split Word is:=> ${splitWord}`);
    console.log(`\n***Division, Multiplication***`);
    var divideWord= stringLength/countSplitWord;
    console.log(`String Length / Total no. of word:=> ${divideWord}`);
    var multiWord=stringLength*countSplitWord;
    console.log(`String Length * Total no. of word:=> ${multiWord}`);
}
multdiv();

