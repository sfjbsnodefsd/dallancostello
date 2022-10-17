const express = require("express");

const app = express();

app.get("/test", (res, req) => {
    res.send("hey how are you doing ?")
})

app.get("/test/subjects", (req,res) => {
    res.send(['maths', 'science', 'IT']);
})

const add =(a,b) => {
    return a + b;
}

module.exports = add

app.listen(8081, () => console.log("listening at port 8081"));