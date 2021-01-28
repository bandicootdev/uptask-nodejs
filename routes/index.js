const {Router} = require('express')
const router = Router();
const {projectsHome} = require('../controllers/projectsController');

module.exports = () => {
  router.get('/', projectsHome);

  return router;
}