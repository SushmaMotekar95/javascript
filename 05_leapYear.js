console.log(`---Check given year is leap year or not---\n`);
var checkLeapYear= function(leapYear)
{
    if(leapYear==null || leapYear==undefined || isNaN(leapYear) || leapYear=="Twenty Twenty")
    {
        console.log(`- ${leapYear} :=> Invalid data\n`);

    }
    else 
    {
        console.log(`- ${leapYear} :=> Valid data`);
        if(((leapYear%4==0)&&(leapYear%100!==0))||(leapYear%400==0))
        {
            console.log(` "${leapYear} is a leap year"\n`);
        }
        else
        {
            console.log(` "${leapYear} is not a leap year"\n`);
        }
    }
    
}
checkLeapYear(2020);
checkLeapYear(1999);
checkLeapYear(1600);
checkLeapYear(2022);
checkLeapYear(1945);
checkLeapYear(null);
checkLeapYear("Twenty Twenty");
checkLeapYear(undefined);
checkLeapYear(NaN);
checkLeapYear(1750);
