'use strict'

var mongoose = require('../DBConfig/DBSchema');
var BookSchema = mongoose.model('Book');

exports.createBook = function (book) {
    return new Promise((resolve, reject) => {
        var newBook = new BookSchema({
            name: book.name,
            isbn: book.isbn,
            price: book.price,
            year: book.year,
            publisher: book.publisher,
            author: book.author
        })

        newBook.save().then((data) => {
            resolve({
                status: 201,
                message: "Book created!"
            })
        }).catch((err) => {
            reject({
                status: 500,
                message: "An error occured when creating the book : " + err
            })
        })
    })
}

exports.getAllBooks = function () {
    return new Promise((resolve, reject) => {
        BookSchema.find().exec().then((data) => {
            resolve({
                status: 200,
                message: "Fetching all books",
                data: data
            })
        }).catch((error) => {
            reject({
                status: 404,
                message: "An error occured when fetching books : " + error
            })
        })
    })
}

exports.getBook = function (id) {
    return new Promise((resolve, reject) => {
        BookSchema.find(id).exec().then((data) => {
            resolve({
                status: 200,
                message: "Fetching book details",
                data: data
            })
        }).catch((error) => {
            reject({
                status: 404,
                message: "An error occured when finding the book : " + err
            })
        })
    })
}

exports.getAllAuthors = function () {
    return new Promise((resolve, reject) => {
        BookSchema.find().distinct('author').exec().then((data) => {
            resolve({
                status: 200,
                message: "Fetching authors",
                data: data
            })
        }).catch((error) => {
            console.log(error)
            reject({
                status: 404,
                message: "An error occured when finding the author : " + error
            })
        })
    })
}

exports.getBooksByAuthor = function (author) {
    return new Promise((resolve, reject) => {
        BookSchema.find({ author: author }).exec().then((data) => {
            resolve({
                status: 200,
                message: "Fetching authors",
                data: data
            })
        }).catch((error) => {
            reject({
                status: 404,
                message: "An error occured when finding the author : " + error
            })
        })
    })
}