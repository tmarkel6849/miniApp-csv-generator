const express = require('express');
const fs = require('fs');
const path = require('path');
const bodyParser = require('body-parser');
// const makeCSV = require('./index.js').makeCSV;
// const chilObj = require('./index.js').childObj;
// const newLine = require('./index.js').newLine;


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
  let sentData = req.body;
  sentData = sentData.split('=');
  let data = sentData[1].trim();
  let parsedData = JSON.parse(data);
  makeCSV(parsedData)

  fs.writeFile('./generated.csv', csvText, 'utf8', (err) => {
    if (err) {
      console.log('There was an error!');
      return;
    }
    // res.sendFile('./public/generated.csv');
  })

 res.redirect('/');
});









let csvText = ``;

const newLine = () => {
  return `
`;
}

const makeCSV = (data) => {
  for (let key in data) {
    if (key === 'children') break;
    csvText += `${key},`;
  }
  csvText = csvText.slice(0, csvText.length - 1);
  csvText += newLine();
  for (let key in data) {
    if (Array.isArray(data[key])) {
      if (data[key].length > 0) {
        childObj(data[key]);
        continue;
      } else {
        continue;
      }
    }
    csvText += `${data[key]},`;
  }
  csvText = csvText.slice(0, csvText.length - 1);
}
const childObj = (array) => {
  for (let obj of array) {
    csvText = csvText.slice(0, csvText.length - 1);
    csvText += newLine();
    for (let key in obj) {
      if (Array.isArray(obj[key])) {
        if (obj[key].length > 0) {
          csvText = csvText.slice(0, csvText.length - 1);
          csvText += newLine();
          childObj(obj[key]);
          continue;
        } else {
          continue;
        }
      }
      csvText += `${obj[key]},`;
    }
  }
}


module.exports = app;