import axios from "axios";

const task = document.querySelector('.listado-pendientes')

if (task) {
  task.addEventListener('click', e => {
    if (e.target.classList.contains('fa-check-circle')) {
      const icon = e.target;
      const idTask = icon.parentElement.parentElement.dataset.task
      const url = `${location.origin}/task/${idTask}`
      axios.patch(url, {})
        .then(res => {
          if (res.status === 200) {
            icon.classList.toggle('completo')
          }
        })
        .catch(err => {
          console.log(err)
        })
    }
  })
}