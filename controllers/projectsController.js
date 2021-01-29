const Projects = require('../models/Projects')

exports.projectsHome = async (req, res) => {
  let projects = await Projects.findAll().catch(err => {
    console.log(err)
  })
  res.render('index', {
    title: "Projects",
    projects
  })
}

exports.formProjects = async (req, res) => {
  let projects = await Projects.findAll().catch(err => {
    console.log(err)
  })
  res.render('newProject', {
    pageName: 'New Project',
    projects
  })
}

exports.newProject = async (req, res) => {
  let projects = await Projects.findAll().catch(err => {
    console.log(err)
  })
  let {name} = req.body;
  let errors = []
  if (!name) {
    errors.push({'message': 'add the task name'});
  }

  if (errors.length > 0) {
    res.render('newProject', {
      pageName: 'New Project',
      errors,
      projects
    })
  } else {
    await Projects.create({name}).catch(err => {
      console.log(err)
    })
    return res.redirect('/')
  }
}

exports.projectGetOne = async (req, res, next) => {
  let projects = await Projects.findAll().catch(err => {
    console.log(err)
  })

  const project = await Projects.findOne({
    where: {
      url: req.params.url
    }
  }).catch(err => {
    console.log(err)
  })

  if (!project) return next()

   res.render('task', {
    pageName: 'project tasks',
    project,
    projects
  })
}