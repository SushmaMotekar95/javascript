console.log(`--1) Task--`);
function maleMarriageEligibility(gender,age,boyName)
{
    var marri=(gender=="Male" && age>=21)?`${boyName} is eligible for marriage`:`${boyName} is not eligible for marriage`;
    console.log(marri);
}

maleMarriageEligibility("Male",25,"Billgates");
maleMarriageEligibility("Male",17,"Stew Jobs");

console.log(`\n--2) Task--`);
function femaleMarriageEligibility(gender,age,girlName)
{
    var marri=(gender=="Female" && age>=18)?`${girlName} is eligible for marriage`:`${girlName} is not eligible for marriage`;
    console.log(marri);
}

femaleMarriageEligibility("Female",16,"Jenifer");
femaleMarriageEligibility("Female",27,"Malinda Gates");