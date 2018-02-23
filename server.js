const fs = require('fs');
const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json());

app.get('/', (req, res) => res.send('Hello World!'));
app.all('/data', (req, res) => {
  console.log('Request method:', req.method);
  console.log('Request body:', req.body);
  const results = JSON.parse(fs.readFileSync('./data.json'));
  res.send(results);
});

app.listen(4000, () => console.log('Mock server listening on port 4000!'));
