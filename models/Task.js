const Sequelize = require('sequelize');
const db = require('../config/db');
const Projects = require('./Projects');
const Task = db.define('tasks', {
  id: {
    type: Sequelize.BIGINT,
    primaryKey: true,
    autoIncrement: true
  },
  name: Sequelize.STRING(150),
  state: Sequelize.INTEGER(1)
})

Task.belongsTo(Projects);

module.exports = Task;