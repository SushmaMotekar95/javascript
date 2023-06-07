class Employee
{
    constructor(emp_id, emp_name, emp_dept, emp_salary, emp_company)
    {
        this.emp_id=emp_id;
        this.emp_name=emp_name;
        this.emp_dept=emp_dept;
        this.emp_salary=emp_salary;
        this.emp_company=emp_company;
    }
}

const emp_anil=new Employee(22,"Anil","IT",50000,"TCS");
const emp_radha=new Employee(33,"Radha","HR",74000,"Wipro");
const emp_rishi=new Employee(55,"Rishi","Finance",47000,"TCS");
const emp_sonali=new Employee(66,"Sonali","Finance",45000,"Infy");
const emp_monika=new Employee(77,"Monika","IT",40000,"Wipro");
const emp_viny=new Employee(88,"Vinayak","IT",75000,"TCS");
const emp_mahi=new Employee(99,"Mahesh","HR",85000,"Infy");
const arrayEmps=[emp_anil,emp_radha,emp_rishi,emp_sonali,emp_monika,emp_viny,emp_mahi];

console.log(`\n--------1) Find all the employees from 'Wipro' company---------`);
const wiproEmployees=arrayEmps.filter((employee)=>{
    return employee.emp_company=='Wipro';
})
console.log(wiproEmployees);
for(const emp of wiproEmployees)
{
    console.log("- ",emp);
}

console.log(`\n--------2) Find all the employees from 'IT' OR 'HR' department---------`);
const hrItDept=arrayEmps.filter((employee)=>{
    return (employee.emp_dept=='IT'||employee.emp_dept=='HR');
})
console.log(hrItDept);
for(const emp1 of hrItDept)
{
    console.log("- ",emp1);
}

console.log(`\n--------3) Find all the employees whose emp id's are greater than 50---------`);
const idGreater50=arrayEmps.filter((employee)=>{
    return (employee.emp_id>50);
})
console.log(idGreater50);
for(const emp2 of idGreater50)
{
    console.log("- ",emp2);
}

console.log(`\n--------4) Find all the employees whose name start with letter "A" of "V" or "M"---------`);
const startWithAVM=arrayEmps.filter((employee)=>{
    return (employee.emp_name.startsWith("A")||employee.emp_name.startsWith("V")||employee.emp_name.startsWith("M"));
})
console.log(startWithAVM);
for(const emp3 of startWithAVM)
{
    console.log("- ",emp3);
}

console.log(`\n--------5) Find all the average salary of employee for all the department---------`);
const salary=arrayEmps.map((employee)=>{
    return (employee.emp_salary);
})
const totalSalary=salary.reduce((runningTotal,value)=>{
    return runningTotal+value;
})
const averageSalary=totalSalary/salary.length;
console.log(`Average Salary of all department :=> ${averageSalary}`);

console.log(`\n--------6) Find all the average salary of employee of "IT" department---------`);
const itDept=arrayEmps.filter((employee)=>{
    return (employee.emp_dept=="IT");
})

const salary1=itDept.map((employee)=>{
    return (employee.emp_salary);
})
const totalSalary1=salary1.reduce((runningTotal,value)=>{
    return runningTotal+value;
})
const averageSalary1=totalSalary1/salary1.length;
console.log(`Average Salary of IT department :=> ${averageSalary1}`)

