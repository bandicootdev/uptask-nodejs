const Projects = require('../models/Projects')
const Task = require('../models/Task')

exports.crateTask = async (req, res, next) => {
  const {url} = req.params;
  const {name} = req.body;
  const project = await Projects.findOne({where: {url}}).catch(err => {
    throw err
  })
  const task = await Task.create({
    name,
    state: 0,
    projectId: project.id
  });
  if (!task) next();

  res.redirect(`/projects/${url}`)
}

exports.editTask = async (req, res, next) => {
  const {id} = req.params;
  const task = await Task.findByPk(id).catch(err => {
    console.log(err)
  })
  await task.update({state: !task.state}).catch(err => {
    console.log(err)
  })

  if (!task) next();

  res.status(200).send('updated task')
}