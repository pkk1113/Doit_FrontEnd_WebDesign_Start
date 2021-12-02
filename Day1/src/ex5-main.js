let trigger = document.querySelector("#trigger");
let menu = document.querySelector("nav ul");

trigger.addEventListener("click", (e) => {
    e.preventDefault();
    menu.classList.toggle("visible");
});