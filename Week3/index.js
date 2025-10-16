// Definition of the function EmployeeInfo
function EmployeeInfo(name, Salary)
 {
  console.log("Welcome " + name + ", your monthly salary is " + Salary);
}

console.log("This is my first program");

var EmpName = "Ichchha";
var EmpSalary = 250000;

// Calling the function EmployeeInfo
EmployeeInfo(EmpName, EmpSalary);

//Code for Second Exercise Starts form here:
const EmpSkills= (skills)=> {
    console.log("Expert in" + skills)
}
EmpSkills("java")
const student= require('./StudentInfo')
const person = require('./Person')
// because getName is the function so we use ()
console.log("Student Name:" +student.getName())
console.log(student.Location(55))
console.log(student.dob)
// because dob is a variable so we do nt use ()
console.log(student.Studentgrade())
console.log("grade is "+student.Studentgrade(55) )
// creating new Person
person1= new person("Ichchha","Uk","ichchhapaneru@gmail.com")
console.log("using Person Module",person1.getPersonInfo())
console.log("Programe ended")