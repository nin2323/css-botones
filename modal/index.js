document.addEventListener('DOMContentLoaded', () =>{
    const openModal = document.querySelector('.button');
    const modal = document.querySelector('.modal');
    const buttonNo = document.querySelector('.button-secondary');

    openModal.addEventListener('click', () => {
        modal.classList.add('show');   
    });

    buttonNo.addEventListener('click', () => {
        modal.classList.remove('show');
    })
});