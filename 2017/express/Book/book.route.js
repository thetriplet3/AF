'use strict'

var express = require('express');
var router = express.Router();

var BookController = require('./book.controller')


router.get('/authors/', (req, res) => {
    BookController.getAllAuthors().then((response) => {
        res.status(response.status).send(response.data)
    }).catch((error) => {
        res.status(error.status).send(error.message)
    })
})

router.get('/', (req, res) => {
    BookController.getAllBooks().then((response) => {
        res.status(response.status).send(response.data)
    }).catch((error) => {
        res.status(error.status).send(error.message)
    })
})

router.post('/', (req, res) => {
    console.log(req.body);
    BookController.createBook(req.body).then((response) => {
        res.status(response.status).send(response.data)
    }).catch((error) => {
        res.status(error.status).send(error.message)
    })
})

router.get('/:author', (req, res) => {
    console.log(req.params);
    BookController.getBooksByAuthor(req.params.author).then((response) => {
        res.status(response.status).send(response.data)
    }).catch((error) => {
        res.status(error.status).send(error.message)
    })
})

module.exports = router;