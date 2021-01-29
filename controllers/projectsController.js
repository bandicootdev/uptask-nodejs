const Projects = require('../models/Projects')

exports.projectsHome = (req, res) => {
  res.render('index', {
    title: "Projects"
  })
}

exports.formProjects = (req, res) => {
  res.render('newProject', {
    pageName: 'New Project'
  })
}

exports.newProject = async (req, res) => {
  let {name} = req.body;
  let errors = []
  if (!name) {
    errors.push({'message': 'add the task name'});
  }

  if (errors.length > 0) {
    res.render('newProject', {
      pageName: 'New Project',
      errors
    })
  } else {
    await Projects.create({name}).catch(err => {
      console.log(err)
    })
    return res.redirect('/')
  }

}