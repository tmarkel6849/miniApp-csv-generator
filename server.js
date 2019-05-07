const express = require('express');
const fs = require('fs');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;
/*___________________INITIALIZE______________________*/
app.listen(port, (err, result) => {
  if (err) {
    console.log('This is the error', err);
  }
  console.log('CSV Generator Starting Up...');
});

/*____________________MIDDLEWARE_____________________*/
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.text());

/*_____________________ROUTES________________________*/
app.get('/', (req, res) => {
  res.sendStatus(200);
});

app.post('/csv', (req, res) => {
  let clientData = req.body;
  let dataArr = clientData.split('=');
  console.log(dataArr[1].trim());
 res.redirect('/');
});





module.exports = app;