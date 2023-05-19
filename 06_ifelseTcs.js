console.log("           --TCS Interview Eligibility--         \n");
var tcsInterview=function(gradScore,hscScore,sscScore,candidateName)
{
    if(gradScore>=70 || hscScore>=80||sscScore>90)
 
    console.log(`Congrates "${candidateName}" you are eligible for TCS interview`);
    else
    {
    console.log(`Unfortunately "${candidateName}"  you are not eligible for TCS interview`);
    }

}
var result= tcsInterview(80,86,90,"Ajay Patil");
var result= tcsInterview(70,65,55,"Partiksha Mahajan");
var result= tcsInterview(60,79,88,"Riteek Patil");