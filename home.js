const express = require('express');
const app = express();

app.get('/home',(req,res)=>{
    res.send('<b>Welcome to Home Page</b>');
});

app.listen(3000,()=>{
    console.log('Server is running on port 3000');
});