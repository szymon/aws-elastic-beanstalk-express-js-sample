const express = require('express');
const app = express();
const port = 8080;
const os = require('os');

host = os.hostname();

app.get('/', (req, res) => res.send(`Hello World! This should run on ${host}`));

app.listen(port);
console.log(`App running on http://localhost:${port}`);
