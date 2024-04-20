document.addEventListener("DOMContentLoaded", function() {
    const hamburgerButton = document.querySelector(".hamburger");
    const xButton = document.querySelector(".xbtn");
    const modal = document.querySelector(".modal");
  
    hamburgerButton.addEventListener("click", function() {
      modal.classList.toggle("active");
      hamburgerButton.classList.toggle("active");
      xButton.classList.toggle("active");
    });


    xButton.addEventListener("click", function() {
        modal.classList.toggle("active");
        hamburgerButton.classList.toggle("active");
        xButton.classList.toggle("active");
      });
  });
  