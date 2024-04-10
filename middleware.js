const morgan = require('morgan');
const express = require('express');
const routerWrapper = require('./routes/index');

module.exports = function(app) {
    app.use(morgan('dev'));
    app.use(express.json());
    app.use('/api/v1', routerWrapper);

    app.get('/api/v1/health-check', (req, res) => {
        res.status(200).json({
            success: true,
            message: `Todo microservice up and running`
        })
    })
} 