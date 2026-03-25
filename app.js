const express = require('express');
const app = express();
const studentRouter = require('./router_student'); //Importing the router from router_student.js

app.use('/students',studentRouter);
app.listen(3000,()=>{
    console.log("Server is running on port 3000");
});