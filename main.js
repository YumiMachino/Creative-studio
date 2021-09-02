const hamburger = document.getElementById("hamburger");
const closeBtn = document.getElementById("closeBtn");

hamburger.addEventListener("click", openSlideMenu);
closeBtn.addEventListener("click", closeSlideMenu);

function openSlideMenu() {
  document.querySelector("#slide-menu").style.width = "300px";
  document.querySelector("#slide-menu").style.paddingLeft = "60px";
  closeBtn.classList.remove("animateCloseBtn");
}

function closeSlideMenu() {
  document.querySelector("#slide-menu").style.width = "0";
  document.querySelector("#slide-menu").style.paddingLeft = "0";
  closeBtn.classList.add("animateCloseBtn");
}
