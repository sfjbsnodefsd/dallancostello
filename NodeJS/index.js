// console.log("Hello, this is Dallan, I hope you are having a great day!");

const http = require('http');

function greet (req, resp) {
    resp.write("<h1>Hey this is Peter, I hope you have a great day!</h1>")
    resp.end();
}

http.createServer(greet).listen(5000);