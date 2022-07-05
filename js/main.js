menu = document.querySelector("#menu-bar")
navbar = document.querySelector(".navbar")

menu.addEventListener("click", () => {
    menu.classList.toggle("uil-times");
    navbar.classList.toggle("active");
})
window.onscroll = () => {
    menu.classList.remove("uil-times");
    navbar.classList.remove("active");
}

let allLinks = document.getElementsByTagName("a")

allLinks.addEventListener("click", function(e) {
    e.preventDefault()
})

