/* eslint-disable no-console */
const express = require('express');
// extra middleware to import
const morgan = require('morgan');
// app creation
const app = express();

// import cors
const cors = require('cors');

// import database
const db = require('../database/index.js');
// port to listen
const port = 3001;

// use middelware
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/', express.static('client/public'));

// enable CORS requests
app.use(cors());

app.get('/api/photos', (req, res) => {
  db.getAllPhotos((err, result) => {
    res.json(result);
  });
});

// listen on port
app.listen(port, () => {
  console.log(`listening on port: ${port}!`);
});
