'use strict';

const express = require('express');

// Constants
const PORT = 8080;
const HOST = '0.0.0.0';

// App
const app = express();
app.get('/', (req, res) => {
  let output = {
      data : 'Some data from the pretend database'
  }
  res.send( JSON.stringify(output) );
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);

