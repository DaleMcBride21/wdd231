const openButton = document.querySelector('#open-modal');
const closeButton = document.querySelector('.close-button');
const modal = document.querySelector('#modal');

const openModel = () => {
    modal.classList.add('open');
    modal.setAttribute("aria-hidden", false);
}

const closeModel = () => {
    modal.classList.remove('open');
    modal.setAttribute("aria-hidden", true);
}

openButton.addEventListener('click', openModel);
closeButton.addEventListener('click', closeModel);

window.addEventListener("click", function (event) {
    
    if (event.target === modal) {
      closeModal();
    }
});
  
window.addEventListener("keydown", function (event) {
    if (event.key === "Escape") {
      closeModal();
    }
});