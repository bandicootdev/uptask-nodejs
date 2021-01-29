import Swal from 'sweetalert2'
import axios from "axios";

const btnDelete = document.querySelector('#eliminar-proyecto');
if (btnDelete) {
  btnDelete.addEventListener('click', (e) => {
    const urlProject = e.target.dataset.projectUrl;
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
        const url = `${location.origin}/projects/${urlProject}`

        axios.delete(url, {params: urlProject})
          .then((res) => {
            Swal.fire(
              'Deleted!',
              res.data,
              'success'
            )
            setTimeout(() => {
              window.location.href = '/'
            }, 1500)
          }).catch(err => {
          console.log(err)
        }).catch(() => {
          Swal.fire({
            type: 'error',
            title: 'an error occurred',
            text: 'could not delete the project'
          })
        })
      }
    })

  })
}

export default btnDelete;