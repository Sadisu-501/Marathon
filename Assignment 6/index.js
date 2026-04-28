const toggle = document.getElementById("menu-toggle");
const navLinks = document.querySelector(".nav-links");
const path = document.getElementById("menu-path");

// plus icon
const plusIcon = "M224,128a8,8,0,0,1-8,8H136v80a8,8,0,0,1-16,0V136H40a8,8,0,0,1,0-16h80V40a8,8,0,0,1,16,0v80h80A8,8,0,0,1,224,128Z";

// this eswitches the plus icon to minus icon when clicked
const minusIcon = "M40,120h176a8,8,0,0,1,0,16H40a8,8,0,0,1,0-16Z";

toggle.addEventListener("click", () => {
  navLinks.classList.toggle("active");

  if (navLinks.classList.contains("active")) {
    path.setAttribute("d", minusIcon);
  } else {
    path.setAttribute("d", plusIcon);
  }
});
