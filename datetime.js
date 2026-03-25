const express = require('express');
const app = express();
app.get('/',(req,res) =>{
    const currentDateTime = new Date();
    res.send(`Current date and time:${currentDateTime}`); //using backticks ``
});
app.listen(3000,()=>{
    console.log('Server is running on port 3000');
});