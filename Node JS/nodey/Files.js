var file = require("./fileOperations.js")

var fileName = "sample.txt"

// Create file
file.CreateFile(fileName)

// Write data
file.writeFile(fileName, "Hello Node.js!")

// Read data
var content = file.readFile(fileName)
console.log("File Content is: " + content)

// Delete file
//file.deleteFile(fileName)