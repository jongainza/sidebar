const ope = document.querySelector(".sidebar-toggle");
const clos = document.querySelector(".close-btn");
const sidebar = document.querySelector(".sidebar");

ope.addEventListener("click", function () {
  sidebar.classList.toggle("show-sidebar");
});

clos.addEventListener("click", function () {
  sidebar.classList.remove("show-sidebar");
});
