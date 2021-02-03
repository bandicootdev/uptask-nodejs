const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const flash = require('connect-flash');
const session = require('express-session')
const cookieParser = require('cookie-parser')
const app = express();
const routes = require('./routes');
const db = require('./config/db')
const helpers = require('./helpers')
require('./models/Projects')
require('./models/Task')
require('./models/User')

db.sync()
  .then(() => console.log('db is connect'))
  .catch((err) => console.log(err))

app.use(express.static('public'));
app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));
app.use(bodyParser.urlencoded({extended: true}));
app.use(flash())
app.use(session({
  secret: 'supersecret',
  resave: false,
  saveUninitialized: false
}))

app.use((req, res, next) => {
  res.locals.varDump = helpers.varDump;
  res.locals.messages = req.flash();
  next()
})

app.use('/', [routes()]);


app.listen(3000, () => {
  console.log('server on port 3000')
});