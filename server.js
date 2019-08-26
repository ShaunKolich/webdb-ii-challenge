const express = require('express');

const Cars = require('./data/cars-router');

const server = express();


//middleware
server.use(express.json());

server.use('/cars', Cars);

server.get('/', (req, res) => {
    res.send('<h2>I love when projects give you nothing!</h2>')
});


module.exports = server;