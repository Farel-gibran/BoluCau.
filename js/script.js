// Toggle class active
const navbarNav = document.querySelector(".navbar-nav");
//ketika menu-bar di klik
document.querySelector("#menu-bar").onclick = () => {
  navbarNav.classList.toggle("active");
};
