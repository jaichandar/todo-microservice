const express = require('express')
const parentRoute = express.Router();
const TodoRouters = require('./todo');

parentRoute.use('/todo', TodoRouters);

module.exports = parentRoute;
