function voteEligibility(age)
{
    if(age==undefined||age==null)
    {
        console.log(`- Age=${age}\n "Invalid Input Data"\n`);
    }
    else if(age<=0 || age>=120)
    {
        console.log(`- Age=${age}\n "Invalid Data"\n`);
    }
    else if(age<18)
    {
        console.log(`- Age=${age}\n "You are not eligible for vote"\n`);
    }
    else
    {
        console.log(`- Age=${age}\n "You are eligible for vote"\n`);
    }
}
 voteEligibility(45);
 voteEligibility(17);
 voteEligibility(8);
 voteEligibility(20);
 voteEligibility(-10);
 voteEligibility(200);
 voteEligibility(0);
 voteEligibility(undefined);
 voteEligibility(null);

