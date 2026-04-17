/*Write a Node.js program using Mongoose to define a schema for books and delete all records 
from the books collection in a MongoDB database. */
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

const Book = mongoose.model('Books', bookSchema);

const deleteAllBooks = async () => {
    try {
        const result = await Book.deleteMany({});
        console.log("All book records deleted successfully");
        console.log("Deleted count:", result.deletedCount);

        mongoose.connection.close();
    } catch (err) {
        console.log(err);
    }
};

deleteAllBooks();