const Sequelize = require('sequelize');
const sequelize = new Sequelize('uptask', 'root', '', {
  host: 'localhost',
  dialect: 'mysql',
  port: '3306',
  operatorsAliases: 0,
  define: {
    timestamp: false
  },
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  },
  // logging: false
})
module.exports = sequelize;