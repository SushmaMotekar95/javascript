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

const array_employees=[emp_anil,emp_radha,emp_rishi,emp_sonali,emp_monika,emp_viny,emp_mahi]
let len=array_employees.length;

console.log(`------1) TCS employee name and department-------`);
array_employees.forEach((employee,index)=>{
    if(employee.emp_company=="TCS")
    {
        console.log(`- Employee Name: ${employee.emp_name} , Department: ${employee.emp_dept}`);
    }
})

console.log(`\n-------2) employees with salary >=50000---------`);
array_employees.forEach((employee)=>{
    if(employee.emp_salary>=50000)
    {
        console.log("-", employee);
    }
})

let salary=0;
console.log(`\n-------3) Sum of all employees salary------------`);
array_employees.forEach((employee)=>{
    salary=salary+ employee.emp_salary;
})
console.log(`Total Salary:=> ${salary}`);

let  averageSalary;
console.log(`\n-------4) Average salary of employees ------------`);
array_employees.forEach((employee)=>{
     averageSalary=salary/len;
})
console.log(`Total Salary:=> ${averageSalary}`);

console.log(`\n---------5) 'IT' OR 'HR' department employees whose salary is >= 75000------`);
array_employees.forEach((employee)=>{
    if((employee.emp_dept=="IT" || employee.emp_dept=="HR") && (employee.emp_salary>=75000))
    {
        console.log("- ",employee);
    }
})