const path = require('path');
const express = require('express');
const app = express();
const routes = require('./routes');

app.use(express.static('public'));
app.use('/', [routes()]);
app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'))


app.listen(3000, () => {
  console.log('server on port 3000')
});