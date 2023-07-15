const openNavbar = document.querySelector(".news-navbar-button");
const closeNavBar = document.querySelector(".news-navbar-close");
const sideNavbar = document.querySelector(".news-navbar");

openNavbar.addEventListener("click", () => {
  sideNavbar.style.width = "250px";
  closeNavBar.style.display = "block";
  document.body.style.backgroundColor = "rgba(0,0,0,0.4)";

  closeNavBar.addEventListener("click", () => {
    sideNavbar.style.width = "0";
    closeNavBar.style.display = "none";
    document.body.style.backgroundColor = "transparent";
  });
});
