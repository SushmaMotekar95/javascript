let professor={name:'Ajay patil',
            age:26,
            qualification:"M.sc(CS)",
            collegeName:"S.V.P arts & science College,Ainpur",
            gender:"Male",
            degress:{
                engineering:"CSC",
                PHD:"Advance Computing",
                master:"Graphics Design"
            },
            certificates:["Hacker Rank Participation","Certificates in IFE course","Certificates in advance programming"],
            show:function() {
                console.log(`Professor Degress:=>${professor.degress.engineering}, ${professor.degress.PHD}, ${professor.degress.master}`);
                return console.log(`- Total Degress:=>${this.certificates.length}`);
                
            }

};

console.log(`=========Professor information==========`);
console.log(`Name:${professor.name}, age:${professor.age}, Qualification:${professor.qualification}, college Name:${professor.collegeName}, Gender:${professor.gender}`);
console.log(`(Degrees):=>Engineering:${professor.degress.engineering}, PHD:${professor.degress.PHD}, Master:${professor.degress.master}`);
console.log(`(Cerificates):=>${professor.certificates}`);


console.log(`\n---- Display and count Total Degrees---`);
professor.show();

console.log(`\n---- Add Total Exprience "14 year"---`);
professor.totalExpricence="14 year";
console.log(`Name:${professor.name}, age:${professor.age}, Qualification:${professor.qualification}, college Name:${professor.collegeName}, Gender:${professor.gender}, Total Exprience:${professor.totalExpricence}`);

console.log(`\n--- Modify Name Ajay patil to Rittek patil------`);
professor.name="Riteek patil";
console.log(`Name:${professor.name}, age:${professor.age}, Qualification:${professor.qualification}, college Name:${professor.collegeName}, Gender:${professor.gender}, Total Exprience:${professor.totalExpricence}`);

console.log(`\n-------add Certificate->"Oracle Certified" at the end of array----`);
professor.certificates.push("Oracle Certified");
console.log(`(Cerificates):=>${professor.certificates}`);

console.log(`\n--------Last element "Oracle Certified" of array certificagtes------`);
const last=professor.certificates.length-1;
console.log(`Cerificates:=> "${professor.certificates[last]}"`);

