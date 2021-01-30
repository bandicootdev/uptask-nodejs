import Swal from "sweetalert2";

export const updateProgress = () => {
  const tasks = document.querySelectorAll('li.tarea')
  if (tasks.length) {
    const taskCompleted = document.querySelectorAll('i.completo')
    const progress = Math.round((taskCompleted.length / tasks.length) * 100)
    const percentage = document.querySelector('#porcentaje')
    percentage.style.width = `${progress}%`;
    if (progress === 100) {
      Swal.fire(
        'Project Completed!',
        'Finished',
        'success'
      )
    }
  }
}