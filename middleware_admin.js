/*Write a middleware to validate whether a user is accessing the route /admin.
If not authorized then send "Access Denied"
*/
const express = require('express');
const app = express();

app.use((req,res,next)=>{
    if(req.query.user === 'admin'){
        next();
    }
    else{
        res.send("Access Denied");
    }
});
app.get('/admin',(req,res)=>{
    res.send("Welcome Admin");
});

app.listen(3000,()=>{
    console.log("Server is running on port 3000");
}  );