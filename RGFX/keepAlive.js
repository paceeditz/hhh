const express = require('express');
const server = express();

server.all('/', (req, res) => {
  res.send('bot is alive!')
});

  function keepAlive() {
   server.listen(3000);
  }

  module.exports = keepAlive;