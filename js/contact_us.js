const contactLink = document.querySelector(".contacts__btn");
const contactPopup = document.querySelector(".modal-contact");
const contactClose = contactPopup.querySelector(".modal-close");

contactLink.addEventListener("click", function (evt) {
  contactPopup.classList.add("modal-show");
});
contactClose.addEventListener("click", function (evt) {
  contactPopup.classList.remove("modal-show");
});