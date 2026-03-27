//Template using EJS (Program 1 )
const express = require('express');
const app = express();

app.set('view engine','ejs');
app.get('/',(req,res)=>{
    res.render('index',{message:'Welcome to Node Js and EJS Template'});
});
app.listen(3000,()=>{
    console.log("EJS Template App is running on Port 3000");
});