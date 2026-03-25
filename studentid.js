const express = require('express');
const app = express();

app.get('/student/:id',(req,res)=>{
    const studentId = req.params.id;
    res.send(`Student ID: ${studentId}`);
});

app.listen(3000,()=>{
    console.log('Server is running on port 3000');
});