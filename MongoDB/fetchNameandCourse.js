const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/college')
.then(() => console.log("MongoDB Connected"))
.catch((err) => {console.log(err)});
//This defines the structure of Students collection in MongoDB
const studentSchema = new mongoose.Schema({
    rollno: Number,
    name: String,
    course:String,
    semester:Number,
    marks: Number
});
//Create model 
const Student = mongoose.model('Student', studentSchema);  
// Fetch name and course of all students
Student.find({}, {name:1, course:1, _id:0})
.then((stud) => { 
    console.log("Student Name and Course:");
    console.log(stud);
    mongoose.connection.close();
});
