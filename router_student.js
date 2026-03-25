/**/ 
const express = require('express');
const router = express.Router(); //Creates a router object

router.use((req,res,next)=>{
    console.log("Router Level Middleware Executed");//Attatches middleware to the router .This middleware before any router inside this router
    next();
});

//Route 1 
router.get('/',(req,res)=>{
    res.send("All Students");
});
//Router 2
router.get('/:id',(req,res)=>{
    res.send('StudentID: ' + req.params.id);
});
module.exports = router; //Exports the router object to be used in other files
