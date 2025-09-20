let display = document.getElementsByClassName("display");
let navModal = document.getElementById("nav-modal");
let navButton = document.getElementById("nav-button");

function togglenav() {
  navModal.classList.toggle("display");
  navButton.innerHTML = navButton.innerHTML === "×" ? "&#9776;" : "&times;";
}
