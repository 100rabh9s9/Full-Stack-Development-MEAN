/* File Operations  */
const fs = require("fs")
//Functions to Create File

//Create File
function CreateFile(fileName)
{
    fs.writeFileSync(fileName,"")
        console.log("File Created Successfully")
}

//Write Data into File
function writeFile(fileName,data)
{
    fs.writeFileSync(fileName,data)
    console.log("Data Written Successfully")
}
//Append Data into file
function readFile(fileName) {
    return fs.readFileSync(fileName, "utf8");
    console.log("Data Appended Successfully")   
}
/*function deleteFile(fileName)
{
    if(fs.existsSync(fileName))
    {
        fs.unlinkSync(fileName)
        console.log("File Deleted Successfully")
    }
    else
    {
        console.log("File does not Exist")
    }
}*/

module.exports = {CreateFile,writeFile,readFile}