var fs = require("fs")
fs.readFile('inputfile2.txt',function(ferr,data)
{
    if(ferr) return console.error(ferr)
    console.log(data.toString())
})
console.log("Execution Ends Here")
//fs.readFile(file.txt,callback) is an asynchronous function. It takes two parameters, the first one is the name of the file to be read and the second one is a callback function that will be called when the file reading is complete. The callback function takes two parameters, the first one is an error object (if any error occurs) and the second one is the data read from the file.
// ferr -> error object , if file file Not found or nay issue 
// data -> file content (in Buffer Format)
//Print first from program  and then read file content and print it . 
