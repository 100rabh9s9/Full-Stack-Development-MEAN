const express = require('express');
const app = express();

//Middleware
app.use((req,res,next)=>{
    console.log("Middleware Executed");
    next();
});

//Route 
app.get('/',(req,res)=>
{
    res.send("Hello World");
});

app.listen(3000);