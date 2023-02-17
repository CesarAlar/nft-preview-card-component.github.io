const modal = document.querySelector('.modal');

const img = document.querySelector('.card__mask__img');
const modalImg = document.querySelector(".modal-content");
const captionText = document.querySelector(".caption");
img.onclick = function(){
  modal.style.display = "block";
  modalImg.src = 'images/image-equilibrium.jpg';
}

const span = document.getElementsByClassName("close")[0];

span.onclick = function() { 
  modal.style.display = "none";
}