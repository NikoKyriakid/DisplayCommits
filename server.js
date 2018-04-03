const fs = require('fs');
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const path = require('path');

app.use(bodyParser.json());

app.use('/', express.static(path.resolve(__dirname, 'dist/')));

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/dist/index.html');
});

app.get('/View', (req, res) => {
  res.sendFile(__dirname + '/dist/index.html');
});


app.all('/data', (req, res) => {
  console.log('Request method:', req.method);
  console.log('Request body:', req.body);
  const results = JSON.parse(fs.readFileSync('./data.json'));
  res.send(results);
});

app.listen(4000, () => console.log('Mock server listening on port 4000!'));
