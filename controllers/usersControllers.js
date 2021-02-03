const User = require('../models/User');
exports.createAccount = (req, res) => {
  res.render('createAccount', {
    pageName: 'Create an Uptask account'
  })
}

exports.newCreateAccount = async (req, res, next) => {
  try {
    const {email, password} = req.body;
    await User.create({email, password}).catch(err => {
      throw err
    })
    res.redirect('/login')
  } catch (err) {
    req.flash('error', err.errors.map(err => err.message))
    res.render('createAccount', {
      messages: req.flash(),
      pageName: 'Create an Uptask account',
      email:req.body.email
    })
  }
}