const pageBg = document.querySelector(".shadow-bg");
const contactLink = document.querySelector(".contacts__btn");
const contactPopup = document.querySelector(".modal-contact");
const contactForm = contactPopup.querySelector(".contact_form");
const contactName = contactPopup.querySelector(".сontact_form-name");
const contactEmail = contactPopup.querySelector(".contact_form-post");
const contactClose = contactPopup.querySelector(".modal-close");

let isStorageSupport = true;
let storage = "";

try {
  storage = localStorage.getItem("name");
} catch (err) {
  isStorageSupport = false;
}

contactLink.addEventListener("click", function (evt) {
  pageBg.classList.add("background-shadow");
  contactPopup.classList.add("modal-show");
  contactPopup.scrollIntoView(false);
  
});
contactClose.addEventListener("click", function (evt) {
  pageBg.classList.remove("background-shadow");
  contactPopup.classList.remove("modal-show");
  contactPopup.classList.remove("modal-error");
});

contactForm.addEventListener("submit", function (evt) {
	if (!contactName.value || !contactEmail.value) {
    evt.preventDefault();
    contactPopup.classList.remove("modal-error");
    contactPopup.offsetWidth = contactPopup.offsetWidth;
    contactPopup.classList.add("modal-error");
  }
 });


  window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    if (contactPopup.classList.contains("modal-show")) {
      evt.preventDefault();
      contactPopup.classList.remove("modal-show");
      contactPopup.classList.remove("modal-error");
    }
  }
});

function changeBackground(Element) {
	var j = Element.getAttribute("aria-label");
    var controls =  document.querySelectorAll(".slider__controls-btn");
    for (var i = 0; i < controls.length; i++) {
		if (i==j){controls[i].classList.add("slider__controls-btn--current");document.body.classList.add("site-wrapper-"+j);}
		else{
    	controls[i].classList.remove("slider__controls-btn--current");
    	document.body.classList.remove("site-wrapper-"+i);}
	}
	var wallpapers =  document.querySelectorAll(".slider__item");
    for (var i = 0; i < wallpapers.length; i++) {
		if (i==j){wallpapers[i].classList.add("slider__item--current");}else
		wallpapers[i].classList.remove("slider__item--current");
    }

}	



const catalogLink = document.querySelector('.catalog');
const navSubmenu = document.querySelector('.nav__item__submenu');
catalogLink.onmouseenter = function() {
	navSubmenu.classList.add("nav__item__submenu--show");
};
catalogLink.onmouseleave = function() {
	//navSubmenu.classList.remove("nav__item__submenu--show");
};