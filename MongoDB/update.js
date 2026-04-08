const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/college').then(() => console.log("MongoDB Connected")).catch((err) => {console.log(err)});
//This defines the structure of Students collection in MongoDB
const studentSchema = new mongoose.Schema({
    rollno: Number,
    name: String,
    course:String,
    semester:Number,
    marks: Number
});
const Student = mongoose.model('Student', studentSchema);  
//Update Student Record whose rollno is 107 and change his course to Msc CS
Student.updateOne(
    {rollno:107},
    {$set:{course:"Msc CS"}})
.then(()=>{
    console.log("Student Record Updated Successfully");
    mongoose.connection.close();    
});