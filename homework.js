const express = require('express');
const app = express();  

app.use((req, res, next) => {
    const dateTime = new Date().toLocaleString();
    console.log("Request Date & Time:", dateTime);

    req.currentTime = dateTime;
    next();
});

app.get('/', (req, res) => {
  res.send(`Current date and time: ${req.currentTime}`);
});

app.listen(3000, () => {
    console.log("Server is running on port 3000");
});