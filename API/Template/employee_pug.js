const express = require('express');
const app = express();
app.set('view engine','pug');
app.get('/',(req,res)=>{
    res.render('index12',{
        empid: 101,
        name: "Anu",
        salary: 50000
    });
});
app.listen(3000,()=>{
    console.log("Pug Template App is running on Port 3000");
});