const express = require('express'); //Loads the express Framework
const app = express(); //call express function

app.get('/', (req, res) => {/* '/' = root url(homepage)
    req = request object(Client data)
    res = response object(Server data)
    res.send() = sends text back to the browser */
    res.send('<h1>Welcome to Express!</h1>');
});

app.listen(3000,()=>{
    console.log('Server is running on port 3000');
});