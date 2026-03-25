const express = require('express');
const app = express();

app.use(express.json());
let books =[
    { id:1,title:"Java Programming",author:"Herbet Schildt "},
    { id:2,title:"Python Programming",author:"Guido Van Rossum"}
];

app.get('/books',(req,res)=>{
    res.json(books);
});
//POST - Add a new book
app.post('/books',(req,res)=>{
    const newBook = {
        id:books.length + 1,
        title:req.body.title,
        author:req.body.author
    };
    books.push(newBook);
    res.status(201).json(newBook); //Return Response with status 201(created)
});
/*To run POST in Postman 
GO to the POSTMAN, change the method to POST and add the book details in the body via 
raw -> JSON 
type in Json Format 
Then Send 
we will see only the entry 
change to GET and we can see all entries including the latest*/
app.listen(3000,()=>{
    console.log("Book API is running on port 3000");
});