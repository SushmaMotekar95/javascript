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

const array=[emp_anil,emp_radha,emp_rishi,emp_sonali,emp_monika,emp_viny,emp_mahi];
console.log(`\n1) Find all the employees working in 'TCS' and log only employee names and company name`);
for(const employee of array)
{
    if(employee.emp_company=="TCS")
    {
        console.log(`- Employee Name:=> "${employee.emp_name}" , Employee Company:=> "${employee.emp_company}"`);
    }
}

console.log(`\n2) Find the 'Finance' department employees, log only department and employee names`);
for(const employee of array)
{
    if(employee.emp_dept=="Finance")
    {
        console.log(`- Employee Name:=> "${employee.emp_name}" , Employee Department:=> "${employee.emp_dept}"`);
    }
}

console.log(`\n3) Find the employees whose name starts with 'R' and and complete employee details on console`);
for(const employee of array)
{
    if(employee.emp_name.startsWith('R'))
    {
        console.log("-",employee);
    }
}

console.log(`\n4) Find the employees whose salary is greater than 75000, and log on console emp_name,campany and salary`);
for(const employee of array)
{
    if(employee.emp_salary>75000)
    {
        console.log(`- Employee Name:=> "${employee.emp_name}" , Employee Company:=> "${employee.emp_company}" , Employee Salary:=> "${employee.emp_salary}"`);
    }
}

console.log(`\n5) Find the emloyees whose salary greater than or equal 50000 and from 'IT' department, log complete employee details`);
for(const employee of array)
{
    if(employee.emp_salary>=50000 && employee.emp_dept=='IT')
    {
        console.log("-",employee);
    }
}

console.log(`\n6) Find out all the employees from company 'Infy' and log complete employee details`);
for(const employee of array)
{
    if(employee.emp_company=="Infy")
    {
        console.log("-",employee);
    }
}

