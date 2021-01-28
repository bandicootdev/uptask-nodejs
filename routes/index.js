const {Router} = require('express')
const router = Router();
const {projectsHome, formProjects, newProject} = require('../controllers/projectsController');

module.exports = () => {
  router.get('/', projectsHome);
  router.get('/new-project', formProjects)
  router.post('/new-project', newProject)

  return router;
}