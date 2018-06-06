'use strict'

var express = requrie('express');
var router = express.Router();

var AuthorController = require('./author.controller');

router.get('/', (req, res) => {
    AuthorController.getAllAuthors().then((response) => {
        res.status(response.status).send(response.data);
    }).catch((error) => {
        res.status(error.status).send(error.data);
    })
})

router.post('/', (req, res) => {
    AuthorController.createAuthor(req.body).then((response) => {
        res.status(response.status).send(response.data);
    }).catch((error) => {
        res.status(error.status).send(error.data);
    })
})

module.exports = router;
