console.log(`----------Object cloning and Traversing-------`);
console.log(`1) Bank Details :=> `);
let bankSbi={
             name:"State Bank Of India",
             branch:"Nimbhora",
             accountNo:5624789065,
             ifscCode:"SBI6789"

}
console.log(bankSbi);

console.log(`\n2) Bank Location Details :=> `);
let bankLocation={
                  street:"Shivaji Road",
                  city:"Jalgoan",
                  pin:425507,
                  state:"Maharastra",
                  country:"India"
}
console.log(bankLocation);

console.log(`\n3) Clone bankSbi and bankLocation :=> `);
let clone={

}
Object.assign(clone,bankSbi,bankLocation);
console.table(clone);

console.log(`\n4) Rate of Interest :=>`);
let rateOfInterest={
                    homeLoanInterest:10,
                    personalLoanInterest:5.5,
                    dueInterest:12.5
}
console.log(rateOfInterest);

console.log(`\n5) Marge Step 1), 2) and 4) :=>`);
let sbiDeatils={

}
const margeObj=Object.assign(sbiDeatils,bankSbi,bankLocation,rateOfInterest);
console.table(margeObj);

console.log(`\n6) Traversing an object :=>\n`);
//console.log(`Key,   Value`);
for (const key in margeObj) {
    if (Object.hasOwnProperty.call(margeObj, key)) {
        const element = margeObj[key];
        console.log(`${key}: ${element}`);
        
    }
}