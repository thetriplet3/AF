const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    name: { type: String, require: true },
    address: { type: String, require: false },
    password: { type: String, require: true },
});

mongoose.model('User', UserSchema);

mongoose.connect('mongodb://127.0.0.1:27017/final', (err) => {
    if (err) {
        console.log(err);
        process.exit(-1);
    }
    console.log('DB Connection was successfully established');
});

module.exports = mongoose;