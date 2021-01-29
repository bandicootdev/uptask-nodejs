const Sequelize = require('sequelize');
const db = require('../config/db');


const Projects = db.define('projects', {
  id: {
    type: Sequelize.BIGINT,
    primaryKey: true,
    autoIncrement: true
  },
  nombre: {type: Sequelize.STRING},
  url: {type: Sequelize.STRING}
});

module.exports = Projects;