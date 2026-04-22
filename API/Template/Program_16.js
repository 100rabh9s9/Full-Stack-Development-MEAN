const express = require('express');
const app = express();

// Set EJS as view engine
app.set('view engine', 'ejs');

// Route
app.get('/', (req, res) => {
    res.render('index3', {
        name: "Anu",
        course: "Computer Science"
    });
});

// Start server
app.listen(3000, () => {
    console.log("EJS Template App is running on Port 3000");
});