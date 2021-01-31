const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const flash = require('connect-flash');
const app = express();
app.use(bodyParser.urlencoded({extended: true}));
const routes = require('./routes');
const db = require('./config/db')
const helpers = require('./helpers')
require('./models/Projects')
require('./models/Task')
require('./models/User')

db.sync()
  .then(() => console.log('db is connect'))
  .catch((err) => console.log(err))

app.use(flash())
app.use((req, res, next) => {
  res.locals.varDump = helpers.varDump;
  next()
})
app.use(express.static('public'));
app.use('/', [routes()]);
app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));

app.listen(3000, () => {
  console.log('server on port 3000')
});