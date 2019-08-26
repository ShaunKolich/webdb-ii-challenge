const express = require('express');

const server = express();

//middleware
server.use(express.json());

server.get('/', (req, res) => {
    res.send('<h2>I love when projects give you nothing!</h2>')
});


module.exports = server;