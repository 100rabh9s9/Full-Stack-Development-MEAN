var http = require('http') //importing http module;
//createServer is a method of http module which creates a server
http.createServer(function(req,res)
{
    res.write("Welcome")
    res.end()
}).listen(8080) //listen method is used to listen to the port number

/*
createServer() : Creates an HTTP server 
1. It takes a callback function that runs every time a client sends
a request to the server. 
2. req -> request obejct (information sent by the client)
3. res -> responseonject (used to send data back to the client)
4. res.write(): sends data to the client(browser)
5. res.end(): ends the response
6. listen(8080): makes the server listen on port 8080
*/