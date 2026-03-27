const express = require('express');
const app = express();

app.use(express.json());
let employees = [
    {id:1,name:"Anu",dept:"HR",salary:30000},
    {id:2,name:"Rahul",dept:"IT",salary:45000}
];
//Display all Employees (GET)
app.get('/employees',(req,res)=>{
    res.json(employees);
});
//Display Employee by ID (GET)
app.get('/employees/:id',(req,res)=>{
    const id = parseInt(req.params.id);
    const employee = employees.find(e => e.id === id);
    if(!employee){
        return res.status(404).send('Employee not found');
    }
    res.json(employee);
});
//Add New Employee (POST)
app.post('/employees',(req,res)=>{
    const NewEmployee ={
        id:employees.length + 1,
        name:req.body.name,
        dept:req.body.dept,
        salary:req.body.salary
    };
    employees.push(NewEmployee);
    res.status(201).json(NewEmployee);
});
//Update Employee Details (PUT)
app.put('/employees/:id',(req,res)=>{
    const id = parseInt(req.params.id);
    const employee = employees.find(e => e.id === id);
    if(!employee){
        return res.status(404).send("Employee not found");
    }
    employee.name = req.body.name;
    employee.dept = req.body.dept,
    employee.salary = req.body.salary;
    res.json(employee);
});
//Delete Employee (DELETE)
app.delete('/employees/:id',(req,res)=>{
    const id = parseInt(req.params.id);
    const employee = employees.find(e => e.id === id);
    if(!employee){
        return res.status(404).send("Employee not found");
    }
    employees = employees.filter(e => e.id !== id);
    res.send("Employee deleted successfully");
});
app.listen(3000,()=>{
    console.log("Employee API is running on Port 3000");
});
