'use strict'

var express = require('express')
var routes = express.Router();

var AuthourRoutes = require('./Author/author.route');
var BookRoutes = require('./Book/book.route');

routes.use('/authors/', AuthourRoutes);
routes.use('/books/', BookRoutes);

module.exports = routes;