const express = require('express');
const app = express();
app.set('view engine','ejs');
app.get('/',(req,res)=>{
    res.render('index1',
        {
        name:"Anu",
        course:"MCA"
    });
});
app.listen(3000,()=>{
    console.log("EJS Template App is running on Port 3000");
});