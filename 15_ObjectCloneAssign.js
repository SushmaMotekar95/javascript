const arrayNums=[20,3,56,90,400,49];
console.log(`Given a array:=> [${arrayNums}]`);

console.log(`\n-----------1) Perform shallow Clone--------------`);
const clone=arrayNums;
console.log(`Shallow Clone Array:=> [${clone}]`);
clone.push(55);
clone.push(66);
console.log(`Update Clone array with values (55,66) push:=> [${clone}]`);
console.log(`Original a array:=> [${arrayNums}]`);

const arrayNums1=[20,3,56,90,400,49];
console.log(`\n-----------2) Perform deep Clone using spread operator--------------`);
let deepClone=[...arrayNums1];
console.log(`Deep Clone Array:=> [${deepClone}]`);
deepClone.push(10);
deepClone.push(25);
console.log(`Update Clone array with values (10,25) push:=> [${deepClone}]`);
console.log(`Original a array:=> [${arrayNums1}]`);

console.log(`\n-----------3) Merge array using spread operator--------------`);
let arrayEven=[2,30,14,8];
let arrayNums2=[20,3,4,56,90,400,49];
console.log(`arrayNum  :=> [${arrayNums2}]`);
console.log(`arrayEven :=> [${arrayEven}]`);
let marge=[...arrayNums2,...arrayEven];
console.log(`Marge array :=> [${marge}]`);


const employee_info={
    emp_id:27,
    emp_name:"John Doe",
    salary:{
        july_month:"40,000INR",
        aug_month:"50,000INR",
        jun_month:"65,000INR",
    },
    address:{
        locality:{
            colony:"OM Vrindavan Society",
            street:"Kanch pokli, 431202",
        },
        city:"Mumbai",
        state:"Maharastra",
        country:"India"
    },
    mobiles:["+91 8600 3456 88", "1800- 4567 32", "+91- 9096 5678 77"]
}
console.log(`\n-----------------4) Create Employee_Info Object-------------------`);
console.log(employee_info);

console.log(`\n-----------------5) Employee details-------------------`);
console.log(`a) Address:Locality:Colony:=>"${employee_info.address.locality.colony}", Street:=>"${employee_info.address.locality.street}", City:=>"${employee_info.address.city}", Country:=>"${employee_info.address.country}"`);
console.log(`b) Mobile Numbers:=> "${employee_info.mobiles}"`);

console.log(`\n-----------------6) Deep Copy using JSON.stringfy()-------------------`);
let deepJSON=JSON.parse(JSON.stringify(employee_info));
deepJSON.salary.july_month="80,000INR";
console.log(`a) - Original july_month salary :=> "${employee_info.salary.july_month}"`);
console.log(`   - Updated july_month salary :=> "${deepJSON.salary.july_month}"`);
deepJSON.address.country="United Kingdom";
console.log(`\nb) - Original Country :=> "${employee_info.address.country}"`);
console.log(`   - Updated Country :=> "${deepJSON.address.country}"`);
//console.log(deepJSON);
