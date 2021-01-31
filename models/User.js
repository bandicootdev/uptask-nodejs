const Sequelize = require('sequelize');
const bcrypt = require('bcrypt-nodejs')
const db = require('../config/db');
const Projects = require('../models/Projects');

const User = db.define('users', {
  id: {
    type: Sequelize.BIGINT,
    primaryKey: true,
    autoIncrement: true
  },
  email: {
    type: Sequelize.STRING(80),
    allowNull: false,
    validate: {
      isEmail: {
        msg: 'add a valid email'
      },
      unique: {
        args: true,
        msg: 'user already registered'
      },
      notEmpty:{
        msg:'email cannot be empty'
      }
    }
  },
  password: {
    type: Sequelize.STRING(60),
    allowNull: false,
    validate:{
      notEmpty:{
        msg:'password cannot be empty'
      }
    }
  }
}, {
  hooks: {
    beforeCreate(attributes, options) {
      attributes.password = bcrypt.hashSync(attributes.password, bcrypt.genSaltSync(10))
    }
  }
})

User.hasMany(Projects)

module.exports = User;