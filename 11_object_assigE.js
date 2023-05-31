let sbiBank={ bankName:"State Bank Of India",
              location:"Nimbhora",
              accountNo:4567834011,
              ifscCode:"SBI3987",
              interastRate:12.7,
              showDetails:function(){
                console.log(`                        ======================SBI Bank Deatils=====================                     `);
                console.log(`Bank Name:=>${this.bankName}, Location:=>${this.location}, Account No:=>${this.accountNo}, IFSC Code:=>${this.ifscCode}, Interest Rate:=>${this.interastRate}`);
              }

};
sbiBank.showDetails();
let axisBank={bankName:"AXIS Bank",
              location:"Jalgoan",
              accountNo:2345189021,
              ifscCode:"AXIS3987",
              interastRate:10.5,
              showDetails:function(){
                console.log(`\n                        ======================AXIS Bank Deatils=====================                     `);
                console.log(`Bank Name:=>${this.bankName}, Location:=>${this.location}, Account No:=>${this.accountNo}, IFSC Code:=>${this.ifscCode}, Interest Rate:=>${this.interastRate}`);
              }


};
axisBank.showDetails();

let hdfcBank={bankName:"HDFC Bank",
              location:"Raver",
              accountNo:2145378699,
              ifscCode:"HDFC1243",
              interastRate:11.7,
              showDetails:function(){
                console.log(`\n                        ======================HDFC Bank Deatils=====================                     `);
                console.log(`Bank Name:=>${this.bankName}, Location:=>${this.location}, Account No:=>${this.accountNo}, IFSC Code:=>${this.ifscCode}, Interest Rate:=>${this.interastRate}`);
              }


};
hdfcBank.showDetails();

let yesBank={bankName:"YES Bank",
              location:"Burhanpur",
              accountNo:5427896754,
              ifscCode:"YES6543",
              interastRate:15.5,
              showDetails:function(){
                console.log(`\n                        ======================YES Bank Deatils=====================                     `);
                console.log(`Bank Name:=>${this.bankName}, Location:=>${this.location}, Account No:=>${this.accountNo}, IFSC Code:=>${this.ifscCode}, Interest Rate:=>${this.interastRate}`);
              }


};
yesBank.showDetails();