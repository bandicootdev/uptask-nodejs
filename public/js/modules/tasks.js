import axios from "axios";
import Swal from "sweetalert2";
import {updateProgress} from '../functions/progress'

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
            updateProgress()
          }
        })
        .catch(err => {
          console.log(err)
        })
    }
    if (e.target.classList.contains('fa-trash')) {
      const taskHtml = e.target.parentElement.parentElement;
      const idTask = taskHtml.dataset.task
      console.log(taskHtml)
      console.log(idTask)
      Swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
      }).then((result) => {
        if (result.isConfirmed) {
          const url = `${location.origin}/task/${idTask}`

          axios.delete(url, {params: idTask})
            .then((res) => {
              taskHtml.parentElement.removeChild(taskHtml)
              updateProgress()
              Swal.fire(
                'Deleted!',
                res.data,
                'success'
              )
            }).catch(err => {
            console.log(err)
          }).catch(() => {
            Swal.fire({
              type: 'error',
              title: 'an error occurred',
              text: 'could not delete the task'
            })
          })
        }
      })
    }
  })
}