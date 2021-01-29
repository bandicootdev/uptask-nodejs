const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const routes = require('./routes');
const db = require('./config/db')

require('./models/Projects')

db.sync()
  .then(() => console.log('db is connect'))
  .catch((err) => console.log(err))

app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended: true}));
app.use('/', [routes()]);
app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));


app.listen(3000, () => {
  console.log('server on port 3000')
});