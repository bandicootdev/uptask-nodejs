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

exports.editProject = async (req, res) => {
  const projectsPromise = Projects.findAll();
  const projectPromise = Projects.findByPk(req.params.id);

  const [projects, project] = await Promise.all([projectsPromise, projectPromise])
    .catch(err => console.log(err))

  res.render('newProject', {
    namePage: 'Edit Project',
    project,
    projects
  })
}

exports.updateProject = async (req, res) => {
  console.log(req.params.id)
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
    await Projects.update(
      {name},
      {where: {id: req.params.id}}).catch(err => {
      console.log(err)
    })
    res.redirect('/')
  }
}