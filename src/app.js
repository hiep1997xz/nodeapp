const express = require('express');
const path = require('path');
const morgan = require('morgan');
const { engine } = require ('express-handlebars');
const app = express();
const port = 8080;

// img - static file
app.use(express.static( path.join(__dirname, 'public')));

//http logger
app.use(morgan('combined'));

//template engine
app.engine('hbs', engine({
  extname: ".hbs"
}));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources/views'));


app.get('/', function (req, res) {
  res.render('home');
});


app.get('/news', function (req, res) {
  res.render('new');
});

app.get('/search', function (req, res) {
  res.render('search');
});


app.listen(port, function () {
  console.log('Your app running on port ' + port)
});
