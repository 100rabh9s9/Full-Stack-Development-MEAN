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

const fetchBooks = async () => {
    const books = await Book.find({}, { Book_name: 1, Author: 1, _id: 0 });
    console.log("Book Details:");
    console.log(books);
};

fetchBooks();