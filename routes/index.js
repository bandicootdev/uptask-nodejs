const {Router} = require('express')
const router = Router();
const {body} = require('express-validator/check');
const {
  projectsHome,
  formProjects,
  newProject,
  projectGetOne,
  editProject,
  updateProject,
  deleteProject
} = require('../controllers/projectsController');

const {crateTask, editTask, deleteTask} = require('../controllers/taskController')
const {createAccount,newCreateAccount} = require('../controllers/usersControllers')
module.exports = () => {
  router.get('/', projectsHome);
  router.get('/new-project', formProjects)
  router.post('/new-project',
    body('name').not().isEmpty().trim().escape(),
    newProject
  )
  router.get('/projects/:url', projectGetOne)
  router.get('/projects/edit/:id', editProject)
  router.post('/new-project/:id',
    body('name').not().isEmpty().trim().escape(),
    updateProject
  )
  router.delete('/projects/:url', deleteProject)
  router.post('/projects/:url', crateTask)
  router.patch('/task/:id', editTask)
  router.delete('/task/:id', deleteTask)
  router.get('/create-account', createAccount)
  router.post('/create-account', newCreateAccount)
  return router;
}