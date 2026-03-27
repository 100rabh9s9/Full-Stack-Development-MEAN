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


//PUT -Update book details(27/03/2026)
//To run PUT in Postman ; Edit using raw and JSON format and add the details to be updated and send
//Then Use GET to see the updated details (remove the id from the link btw)

app.put('/books/:id',(req,res)=>{
    const id = parseInt(req.params.id);
    const book = books.find(b => b.id === id);
    if(!book){
        return res.status(404).send('Book not found');
    }
    book.title = req.body.title;
    book.author = req.body.author;
    res.send(book);

}); 

//DELETE - Remove a book
app.delete('/books/:id',(req,res)=>{
    const id = parseInt(req.params.id);
    const book = books.find(b => b.id === id);
    if(!book){
        return res.status(404).send('Book not found');
    }
    books = books.filter(b => b.id !== id);
    res.send('Book deleted successfully');
});

app.listen(3000,()=>{
    console.log("Book API is running on port 3000");
});