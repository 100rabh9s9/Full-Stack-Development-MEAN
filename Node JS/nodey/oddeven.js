//Create a Node JS Program to check whether a number is even or odd via command line argument
const num = Number(process.argv[2]);
if (num % 2 == 0)
{
    console.log(num + " Is an even Number")
}
else
{
    console.log(num + " Is an odd Number")
}