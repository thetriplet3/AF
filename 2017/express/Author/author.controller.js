'user strict'

var mongoose = require('../DBConfig/DBSchema');
var AuthorSchema = mongoose.model('Author');

exports.createAuthor = function (author) {
    return new Promise((resolve, reject) => {
        var newAuthor = new AuthorSchema({
            firstName: author.firstName,
            lastName: author.lastName
        })

        newAuthor.save().then((data) => {
            resolve({
                status: 201,
                message: 'Author created!'
            })
        }).catch((err) => {
            reject({
                status: 501,
                message: 'An error occured when creating the author : ' + err
            })
        })

    })
}

exports.getAllAuthors = function () {
    return new Promise((resolve, reject) => {
        AuthorSchema.find().exec().then((data) => {
            resolve({
                status: 200,
                message: 'Fetching all authors',
                data: data
            })
        }).catch((err) => {
            reject({
                status: 404,
                message: 'An error occured when fetching authors : ' + err
            })
        })
    })
}