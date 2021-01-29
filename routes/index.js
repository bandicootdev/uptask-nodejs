const {Router} = require('express')
const router = Router();
const {body} = require('express-validator/check');
const {projectsHome, formProjects, newProject} = require('../controllers/projectsController');

module.exports = () => {
  router.get('/', projectsHome);
  router.get('/new-project', formProjects)
  router.post('/new-project',
    body('name').not().isEmpty().trim().escape(),
    newProject
  )

  return router;
}