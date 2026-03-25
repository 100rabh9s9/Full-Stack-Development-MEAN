/*write a program to create a middleware to display time*/
//18/03/2026 Wednesday
const express = require('express');
const app = express();

app.use((req,res,next)=>{
    const time = new Date().toLocaleTimeString();
    console.log("Request Time:",time);
    next();
});

app.get('/',(req,res)=>{
    res.send("Time Logged in Console");
});
app.listen(3000,()=>{
    console.log("Server is running on port 3000");
});