'use strict'

var express = require('express');


var app = express();


app.listen(3000, 'localhost', (err) => {
    if(err) {
        return console.log(err);
    }
    console.log("Server is running on localhost:3000");
})