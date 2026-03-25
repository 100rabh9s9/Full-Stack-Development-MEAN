const express = require('express');
const app = express();

//Route to return JSON data
app.get('/profile',(req,res)=>{
    const student = {
        id:101,
        name:'Anitha',
        course:'MCA',
        year:2026
    };
    res.json(student);
});
//start server
app.listen(3000,()=>{
    console.log('Server is running on port 3000');
});
