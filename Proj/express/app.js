

const express = require('express');
const bodyParser = require('body-parser');
var cors = require('cors');

const routes = require('./routes');

var app = express();

app.use(cors({origin: 'http://localhost:8080'}));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));

app.use('/api/', routes);


app.listen(3000, 'localhost', (err) => {
    if(err){
        return console.log(err);
    }
    console.log('Server is running at localhost:3000');
});