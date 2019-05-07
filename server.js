const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();
const port = 3000;

app.listen(port, (err, result) => {
  if (err) {
    console.log('This is the error', err);
  }
  console.log('CSV Generator Starting Up...');
});

app.use(express.static(__dirname + '/public'));

app.get('/', (req, res) => {
  res.render('index');
});





module.exports = app;