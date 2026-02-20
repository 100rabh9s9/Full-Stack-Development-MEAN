//Create an application application.js file in the folder  and use the calc module to 
//perform addition and subtraction operations and print the results.
var calc = require("./calc.js")
 
result = calc.add(4,5)
result1 = calc.sub(4,5)
resultmul = calc.mul(4,5)
resultdiv = calc.div(4,5)
console.log("Addition of 4 and 5 is "+result)
console.log("Subtraction of 4 and 5 is "+result1)
console.log("Multiplication of 4 and 5 is "+resultmul)
console.log("Divison of 4 and 5 is " +resultdiv)
