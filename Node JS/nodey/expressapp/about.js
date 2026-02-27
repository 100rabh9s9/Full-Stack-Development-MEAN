const express = require('express');
const app = express();

app.get('/aboutus',(req,res)=>{
    res.send('<h1>About us Page</h1>');
});

app.listen(3000,()=>{
    console.log('Server is running on port 3000');
});