const btn = document.getElementById("humberger");
const menu = document.getElementById("menu");

btn.addEventListener("click", toggleMenu);

function toggleMenu() {
  btn.classList.toggle("open");
  menu.classList.toggle("flex");
  menu.classList.toggle("hidden");
}
