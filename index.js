let regLog = document.querySelector(".regLog");
let welcomeUser = document.querySelector(".welcomeUser");
let logout = document.querySelector(".logout");

let homeNav = document.querySelector(".homeNav");
let ServicesNav = document.querySelector(".ServicesNav");
let AboutNav = document.querySelector(".AboutNav");
let ProductsNav = document.querySelector(".ProductsNav");
let DoctorsNav = document.querySelector(".DoctorsNav");

let navElements = [homeNav, ServicesNav, AboutNav, ProductsNav];

if (localStorage.getItem("username")) {
  regLog.style.display = "none";
  logout.style.display = "block";
  welcomeUser.style.display = "block";
  welcomeUser.innerHTML = `Welcome ${localStorage.getItem("username")}`;
  navElements.forEach((el) => {
    el.style.display = "block";
  });
} else {
  navElements.forEach((el) => {
    el.style.display = "none";
  });
  logout.style.display = "none";
  DoctorsNav.style.display = "none";
}

logout.addEventListener("click", function () {
  regLog.style.display = "flex";
  logout.style.display = "none";
  welcomeUser.style.display = "none";
  localStorage.removeItem("username");
  localStorage.removeItem("specialisation");
  navElements.forEach((el) => {
    el.style.display = "none";
  });
  window.location.href = "/login/login.html";
});

if (localStorage.getItem("specialisation") === "undefined" || localStorage.getItem("specialisation")===null) {
  DoctorsNav.style.display = "none";
} else {
  DoctorsNav.style.display = "block";
}
