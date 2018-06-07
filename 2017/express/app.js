'use strict'

var express = require('express');
var bodyParser = require('body-parser')
var cors = require('cors');

var routes = require('./routes')
var app = express();

app.use(cors({origin : '*'}));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));

app.use('/api/', routes);


app.listen(3011, 'localhost', (err) => {
    if(err) {
        return console.log(err);
    }
    console.log("Server is running on localhost:3011");
})