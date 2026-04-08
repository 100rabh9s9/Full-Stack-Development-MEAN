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
//Delete all student records
Student.deleteMany({})
.then(()=>
{
    console.log("All student records deleted successfully");
    mongoose.connection.close();
});