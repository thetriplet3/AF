'use strict'

var express = require('express');
var bodyParser = require('body-parser')
var cors = require('cors');

var routes = require('./routes')
var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));

app.use('/api/', routes);


app.listen(3000, 'localhost', (err) => {
    if(err) {
        return console.log(err);
    }
    console.log("Server is running on localhost:3000");
})