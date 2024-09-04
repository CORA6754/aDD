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











































// server.js
const express = require('express');
const server = express();
const { MongoClient } = require("mongodb");

// Replace the uri string with your connection string.
const uri = "mongodb+srv://cora:mxDbTia0awb2dTUc@cluster0.sogss.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

const client = new MongoClient(uri);

async function run() {
  try {
    const database = client.db('sample_mflix');
    const movies = database.collection('movies');

    // Query for a movie that has the title 'Back to the Future'
    const query = { title: 'Back to the Future' };
    const movie = await movies.findOne(query);

    console.log(movie);
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
run().catch(console.dir);


// starts a simple http server locally on port 3000
server.listen(3000, '127.0.0.1', () => {
  console.log('Listening on 127.0.0.1:3000');
});

// run with `node server.js`


// run with `node server.js`

