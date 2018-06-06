'user strict'

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var localDb = "mongodb://127.0.0.1:27017/final";
var remoteDb = "mongodb://thetriplet3:t19940523@ds247670.mlab.com:47670/af"

var BookSchema = new Schema({
    name: { type: String, required: true },
    isbn: { type: String, required: true },
    price: { type: Number, required: true },
    year: { type: String, required: true },
    publisher: { type: String, required: true },
    author: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Author'
    }
})

var AuthorSchema = new Schema({
    firstName: {type: String, required: true},
    lastName: {type: String, required: true}
})

mongoose.model("Author", AuthorSchema);
mongoose.model("Book", BookSchema);

mongoose.connect(remoteDb, (err) => {
    if (err) {
        return console.log("An error occured when connecting to the database : " + err);
    }
    console.log("Successfully connected to the db");
})

module.exports = mongoose;