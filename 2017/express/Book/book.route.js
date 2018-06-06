'use strict'

var express = require('express');
var router = express.Router();

var BookController = require('./book.controller')


router.get('/authors/', (req, res) => {
    BookController.getAllAuthors().then((response) => {
        res.status(response.status).send(response.data)
    }).catch((error) => {
        res.status(error.status).send(error)
    })
})

router.get('/', (req, res) => {
    BookController.getAllBooks().then((response) => {
        res.status(response.status).send(response.data)
    }).catch((error) => {
        res.status(error.status).send(error.data)
    })
})

router.post('/', (req, res) => {
    BookController.createBook(req.body).then((response) => {
        res.status(response.status).send(response.data)
    }).catch((error) => {
        res.status(error.status).send(error.data)
    })
})

router.get('/:author', (req, res) => {
    console.log(req.params);
    BookController.getBooksByAuthor(req.params.author).then((response) => {
        res.status(response.status).send(response.data)
    }).catch((error) => {
        res.status(error.status).send(error)
    })
})

module.exports = router;