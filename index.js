const express = require('express');
const app = express();
const port = 3000;
const path = require('path');

app.set('view engine', 'ejs');

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
  res.render('home.ejs', { root: __dirname });
})

app.get('/flight_status', (req, res) => {
  res.render('flight_status.ejs', { root: __dirname });
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})