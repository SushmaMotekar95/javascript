function stringBasics()
{
    var compyName="Microsoft";
    console.log("My dream Company:=>",compyName);

    /*******hobby**********/
    var hobby1="Reading";
    var hobby2="Exercise";
    var hobby3="Learn new Skill";
    console.log("\n---My Hobbies are---");
    console.log("1st Hobby:=>",hobby1,"\n2nd Hobby:=>",hobby2,"\n3rd Hobby:=>",hobby3);
    
    /********Length of Hobby***********/
    console.log("\n---Length of Hobbies---");
    var hobby1_length=hobby1.length;
    console.log("Length of 1st Hobby:=>",hobby1_length);
    var hobby2_length=hobby2.length;
    console.log("Length of 2st Hobby:=>",hobby2_length);
    var hobby3_length=hobby3.length;
    console.log("Length of 3st Hobby:=>",hobby3_length);
    var total_length=hobby1_length+hobby2_length+hobby3_length;
    console.log("Total no. of characters in Hobby1,Hobby2,Hobby3:=>",total_length);
}
stringBasics();