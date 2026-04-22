/*Develop an Express.js application using the Pug template engine to display employee details, 
including ID, name, and salary, on a web page.  */
const express = require('express');
const app = express();

app.set('view engine','pug');
app.get('/',(req,res)=>{
    res.render('indexX',{
        empid: 101,
        name: "Anu",
        salary: 50000
    });
});
app.listen(3000,()=>{
    console.log("Pug Template App is running on Port 3000");
});