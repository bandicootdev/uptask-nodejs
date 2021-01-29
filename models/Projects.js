const Sequelize = require('sequelize');
const db = require('../config/db');
const slug = require('slug')
const shortid = require('shortid')
const Projects = db.define('projects', {
  id: {
    type: Sequelize.BIGINT,
    primaryKey: true,
    autoIncrement: true
  },
  name: {type: Sequelize.STRING},
  url: {type: Sequelize.STRING}
}, {
  hooks: {
    beforeCreate(attributes, options) {
      attributes.url = `${slug(attributes.name).toLowerCase()}-${shortid.generate()}`;
    }
  }
});

module.exports = Projects;