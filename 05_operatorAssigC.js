console.log("           --TCS Interview Eligibility--         \n");
var tcsInterview=function(gradScore,hscScore,sscScore,candidateName)
{
    var result=(gradScore>=70 || hscScore>=80||sscScore>90)?true:false;
    var result1=(result==true)?`Congrates "${candidateName}" you are eligible for TCS interview`:`Unfortunately "${candidateName}"  you are not eligible for TCS interview`;
    console.log(result1,"\n");
}
var result= tcsInterview(80,86,90,"Ajay Patil");
var result= tcsInterview(70,65,55,"Partiksha Mahajan");
var result= tcsInterview(60,79,88,"Riteek Patil");