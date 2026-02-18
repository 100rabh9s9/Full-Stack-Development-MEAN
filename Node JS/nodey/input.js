/*Create a Node JS program to read and print command-line arguments.
Convert the first argument to a number , array in NodeJs
Process.argv[0] -> Path of Node.js executable
Process.argv[1] -> Path of the JavaScript file being executed
Process.argv[2] -> First command-line argument(10)
process.argv[3] -> second user input(20)
*/
const num1 = Number(process.argv[2])
const num2 = Number(process.argv[3]); // Convert the second argument to a number

console.log("First Number:",num1)
console.log("Second Number:",num2)
