const express = require('express');
const app = express();

app.set('view engine','pug');

app.get('/',(req,res)=>{
    res.render('index11',{message:"Welcome to Pug Template Engine"});
});

app.listen(3000,()=>{
    console.log("Pug Template App is running on Port 3000");
});