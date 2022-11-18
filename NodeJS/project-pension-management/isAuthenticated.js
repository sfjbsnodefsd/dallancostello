const jwt = require("jsonwebtoken")
const express = require('express');
const app = express();
const secret = 'secret';

module.exports = async function (req, res, next){
    //Bearer <token>
    const header = req.headers.authorization;
    const token = header?.split(" ")[1];
    console.log(token);

    jwt.verify(token, secret, (err, user) =>{
        if(err) {
            console.log(err);
            req.authenticated=false;
        }
        else {
            req.user = user;
            next();
        }
    });
}