/*Write a Node.js program using Mongoose to define a schema for books with fields (Book_id, 
Book_name, Author, Price) and insert at least five book records into a MongoDB database. */
const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/bookstore')
.then(() => console.log("MongoDB Connected"))
.catch((err) => { console.log(err) });

const bookSchema = new mongoose.Schema({
    Book_id: Number,
    Book_name: String,
    Author: String,
    Price: Number
});

const Book = mongoose.model('Book', bookSchema);

const insertBooks = async () => {
    await Book.insertMany([
        { Book_id: 1, Book_name: "The Alchemist", Author: "Paulo Coelho", Price: 299 },
        { Book_id: 2, Book_name: "Atomic Habits", Author: "James Clear", Price: 450 },
        { Book_id: 3, Book_name: "Rich Dad Poor Dad", Author: "Robert Kiyosaki", Price: 350 },
        { Book_id: 4, Book_name: "Think and Grow Rich", Author: "Napoleon Hill", Price: 400 },
        { Book_id: 5, Book_name: "Ikigai", Author: "Hector Garcia", Price: 320 }
    ]);
    console.log("Books record inserted Successfully");
};

insertBooks();