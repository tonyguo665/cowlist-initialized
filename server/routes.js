const controls = require('./controls.js');
const routes = require('express').Router();

routes.get('/cows', controls.get);

routes.post('/cows', controls.post);

routes.delete('/cows', controls.delete);

module.exports = routes;