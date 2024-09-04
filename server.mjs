// server.mjs
import { createServer } from 'node:http';
import { readFileSync } from 'node:fs';

const server = createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/html' });
  res.end(readFileSync('./index.html'));
});

// starts a simple http server locally on port 3000
server.listen(3000, '127.0.0.1', () => {
  console.log('Listening on 127.0.0.1:3000');
});

// run with `node server.mjs`














// server.js
const express = require('express');

const server = express();

server.use('/', express.static(__dirname + "/public"));
server.use('/', express.urlencoded({ extended: true }));

server.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html')
});

server.post('/io', (req, res) => {
  res.end("corad" + req.body)
  console.log(req.body)
});

// starts a simple http server locally on port 3000
server.listen(3000, '127.0.0.1', () => {
  console.log('Listening on 127.0.0.1:3000');
});

// run with `node server.js`

