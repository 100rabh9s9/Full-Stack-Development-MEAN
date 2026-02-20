const fs = require("fs") // fs == file system
const filedata =fs.readFileSync('inputfile1.txt')
console.log(filedata.toString())
console.log("End of Program Execution")

//require("fs imports Node js built in file system module
//This Module allows us to read,write,update, delete files.