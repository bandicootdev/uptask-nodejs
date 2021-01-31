const User = require('../models/User');
exports.createAccount = (req, res) => {
  res.render('createAccount', {
    pageName: 'Create an Uptask account'
  })
}

exports.newCreateAccount = (req, res, next) => {
  const {email, password} = req.body;
  User.create({email, password})
    .then(() => {
      res.redirect('/login')
    })
}