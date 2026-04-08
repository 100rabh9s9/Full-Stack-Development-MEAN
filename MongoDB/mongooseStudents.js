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
//Insert Student Records
const insertStudents = async () => {
    await Student.insertMany([
        {rollno:107,name:"Anupama",course:"MCA",semester:1,marks:87},
        {rollno:109,name:"Rahul",course:"MCA",semester:1,marks:75}
    ]);
    console.log("Students record inserted Successfully");
};
insertStudents();