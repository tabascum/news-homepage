const openNavbar = document.querySelector(".news-navbar-button");
const closeNavBar = document.querySelector(".news-navbar-close");
const sideNavbar = document.querySelector(".news-navbar");

openNavbar.addEventListener("click", (e) => {
  e.preventDefault();

  sideNavbar.style.display = "block";
  closeNavBar.style.display = "block";
  document.body.style.backgroundColor = "rgba(0,0,0,0.4)";

  closeNavBar.addEventListener("click", (e) => {
    e.preventDefault();

    sideNavbar.style.display = "none";
    closeNavBar.style.display = "none";
    document.body.style.backgroundColor = "transparent";
  });
});
