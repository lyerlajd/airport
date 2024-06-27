const express = require('express');
const app = express();
const port = 3000;
const path = require('path');

app.set('view engine', 'ejs');

app.use(express.static(path.join(__dirname, 'public')));

/*-------------------------------------------------------*/
// Routes

app.get('/', (req, res) => {
  res.render('home.ejs', { root: __dirname });
})

app.get('/about', (req, res) => {
  res.render('about.ejs', { root: __dirname });
})

app.get('/book_flights', (req, res) => {
  res.render('book_flights.ejs', { root: __dirname });
})

app.get('/check_in', (req, res) => {
  res.render('check_in', { root: __dirname });
})

app.get('/flight_status', (req, res) => {
  res.render('flight_status.ejs', { root: __dirname });
})

app.get('/my_trips', (req, res) => {
  res.render('my_trips.ejs', { root: __dirname });
})

/*-------------------------------------------------------*/

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
