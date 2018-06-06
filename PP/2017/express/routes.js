'use strict'

var express = require('express')
var routes = express.Router();

var AuthourRoutes = require('./Author/author.route');

routes.use('/author/', AuthourRoutes);

module.exports = routes;