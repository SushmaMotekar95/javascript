/*let sbiBank={ bankName:"State Bank Of India",
              locaion:"Nimbhora",
              AccountNo:4567834011,
              ifscCode:SBI3987,
              interastRate:12.7

};
let axisBank={bankName:"AXIS Bank",
              locaion:"Jalgoan",
              AccountNo:2345189021,
              ifscCode:AXIS3987,
              interastRate:10.5

};
let hdfcBank={bankName:"HDFC Bank",
              locaion:"Raver",
              AccountNo:2145378699,
              ifscCode:HDFC1243,
              interastRate:11.7

};
let yesBank={bankName:"YES Bank",
              locaion:"Burhanpur",
              AccountNo:5427896754,
              ifscCode:YES6543,
              interastRate:15.5

};*/
let person={height:"6feet",
            name:"Bill gates",
            city:"Pune",
            age:54,
            isMarried:true,
            walk: function(){
                console.log(`yes.. i can walk`);

            }
};
console.log(person);
console.table(person);
console.log(`Type of person:=>${typeof person}`);
console.log(`--------------Accessing object-----------`);
//Dot notation .
const personName=person.name;
console.log(`Person Name:=>${personName}`);
console.log(`Person City:=>${person.city}`);
const personHeight=person["height"];
console.log(`Person Height:=>${personHeight}`);
console.log(`Person Height:=>${person['isMarried']}`);

console.log(`--------------update object-----------`);
person.city="Mumbai";
person.isMarried=false;
console.log(`person City:=>${person.city}`);
console.log(`person Marriage Status:=>${person.isMarried}`);


console.log(`--------------adding object- properties----------`);
person.gender="Male";
person.state="MH";
console.log(person);
console.table(person);

console.log(`--------------deleting object- properties----------`);

delete person.height;
console.table(person);

console.log(`--------------Empty object----------`);
let student={

}
console.log(student);
student.name="sushama";
student.age="27";
student.isMarried="false";
console.log(student);
const isCityAvailable="city" in student;
console.log( `Is city available:=>${isCityAvailable}`);
const isname="name" in student;
console.log(isname);

console.log(`--------------function Invoke object----------`);
person.walk();

