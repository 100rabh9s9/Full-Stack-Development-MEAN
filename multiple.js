const express = require('express');
const app = express();

app.get('/user/:name/:age',(req,res)=>{
    const name = req.params.name;
    const age = req.params.age;
    res.send(`<h1>Name: ${name}, Age: ${age}</h1>`);
});

app.listen(3000,()=>{
    console.log('Server is running on port 3000');
});
