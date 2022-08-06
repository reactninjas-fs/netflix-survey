// İlk önce selector ile tuşları ve form divini seçeriz

const visibilityDiv = document.querySelector(".visibility-div");
const visibilityBtn = document.querySelector(".visibility-btn");
const xBtn = document.querySelector(".x-btn");
const form = document.querySelector(".form-container");

const openTheForm = () => {
  visibilityDiv.style.visibility = "hidden";
  form.style.visibility = "visible"
}

const closeTheForm = () => {
  visibilityDiv.style.visibility = "visible";
  form.style.visibility = "hidden"
}

visibilityBtn.addEventListener('click', openTheForm)
xBtn.addEventListener('click', closeTheForm)