console.log(`--------------1) Vahicle (Cars) Details---------------------`);
class Car{
    constructor(name,price,engineSize,fuelType,transmission)
    {
        this.name=name;
        this.price=price;
        this.engineSize=engineSize;
        this.fuelType=fuelType;
        this.transmission=transmission;
    }
     showDetails() {
        console.log(`\n- Name:"${this.name}", Price:"${this.price}", Engine_Size:"${this.engineSize}", Fuel_Type:"${this.fuelType}", Trasmissiom:"${this.transmission}"`);
        
    }
}
const car1=new Car("BMW Z4","89.30 Lakh","2998 cc","Petrol","Automatic(TC)");
const car2=new Car("Maruti Suzuki","7.47 Lakh","1197 cc","Petrol","Manual");
const car3=new Car("Maruti FRONX","8.72 Lakh","1197 cc","Petrol","Manual");
const car4=new Car("Tata Punch","9.52 Lakh","1199 cc","Petrol","Manual/Automatic");
const car5=new Car("Toyota Innova Crysta","25.43 Lakh","2393 cc","Petrol","Manual");
const arrayOfVahicle=[car1,car2,car3,car4,car5];
for (const element of arrayOfVahicle) {
    element.showDetails();
    
}
console.log(`\n---------------2) College Details----------------\n`);
class College{
    constructor(name,location,department,principle)
    {
        this.name=name;
        this.location=location;
        this.department=department;
        this.principle=principle;
    }
} 
const coll1=new College("S.V.P Arts and Science College","Ainpur","Computer Science","Dr.J.B.Anjane");
const coll2=new College("D.N. College","Faizpur","Physics","Dr.R.M Patil");
const coll3=new College("V.S. Naik Arts and Science College","Raver","Chemistry","Dr.A. S. Chaudhari");
const coll4=new College("M.J  College","Jalgoan","Mathematics","Dr. S.b. Mahajan");
const coll5=new College("D.Y. Patil College","Pune","Zology","Dr. R.M.Patil");

traversel(coll1);

traversel(coll2);
traversel(coll3);
traversel(coll4);
traversel(coll5);
function traversel(collegeObject) {
    for (const key in collegeObject) {
        if (Object.hasOwnProperty.call(collegeObject, key)) {
            const element = collegeObject[key];
            console.log(`- ${key}: ${element}`);
            
        }
    }
    console.log("------------------------------------");  
}

