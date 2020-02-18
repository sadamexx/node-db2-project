const express = require('express');
const carsRouter = require('./cars/carsRouter.js');

const server = express();
server.use(express.json());

server.use('/api/cars', carsRouter);

server.get('/', (req, res) => {
    res.send('<h2> Node DB Project #2-- Knex migration & Seeds guyz</h2>');
})

module.exports = server;