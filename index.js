const app = require('./server.js');
const port = 3000;

app.listen(port, (err, result) => {
  if (err) {
    console.log('This is the error', err);
  }
  console.log('CSV Generator Starting Up...');
});