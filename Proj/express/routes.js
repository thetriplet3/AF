var express = require('express');
var routes = express.Router();
var userRoutes = require('./components/User/user.route');

routes.use('/users/', userRoutes);

module.exports = routes;