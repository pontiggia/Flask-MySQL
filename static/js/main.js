const btnDelete = document.querySelectorAll('.btn-delete'); 
if(btnDelete) {
  const btnArray = Array.from(btnDelete); // function that pop up a notification when you are trying to delete a contact
  btnArray.forEach((btn) => {
    btn.addEventListener('click', (e) => {
      if(!confirm('¿Estas seguro que quieres eliminar este contacto?')){
        e.preventDefault();
      }
    });
  })
}
