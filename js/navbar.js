document.addEventListener("DOMContentLoaded", function () {
  const hamburgerBtn = document.getElementById("hamburger-btn");
  const navElements = document.getElementById("navElements");
  const closeIcon = document.querySelector(".hamburger .close-icon");
  hamburgerBtn.addEventListener("click", function () {
    navElements.classList.toggle("show-nav");
    closeIcon.classList.add("clicked");
  });
});
