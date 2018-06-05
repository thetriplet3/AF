var express = require('express');
var router = express.Router();

var UserController = require("./user.controller");

router.post('/', (req, res) => {
    UserController.createUser(req.body).then((response) => {
        res.status(response.status).send(response)
    }).catch((error) => {
        console.log(error);
        res.status(error.status).send(error.message);
    })
})

router.get('/', (req, res) => {
    UserController.getAllUsers(req.body).then((response) => {
        res.status(response.status).send(response)
    }).catch((error) => {
        res.status(error.status).send(error.message);
    })
})

router.get('/:id', (req, res) => {
    console.log(req.body);
    UserController.getUser(req.params.id).then((response) => {
        res.status(response.status).send(response)
    }).catch((error) => {
        res.status(error.status).send(error.message);
    })
})

router.put('/:id', (req, res) => {
    UserController.updateUser(req.params.id, req.body).then((response) => {
        res.status(response.status).send(response)
    }).catch((error) => {
        res.status(error.status).send(error.message);
    })
})

router.delete('/:id', (req, res) => {
    UserController.deleteUser(req.params.id).then((response) => {
        res.status(response.status).send(response)
    }).catch((error) => {
        res.status(error.status).send(error.message);
    })
})

module.exports = router;