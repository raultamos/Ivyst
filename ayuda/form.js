window.onload = function() {
    document.getElementById("contactForm").style.display = "block"; // Asegúrate de que esté oculto en CSS inicialmente
};
const close = document.getElementById("close");
const open = document.getElementById("open");
const modal = document.getElementById("modal");

open.addEventListener("click", () => modal.classList.add("show-modal"));
close.addEventListener("click", () => modal.classList.remove("show-modal"));

window.addEventListener("click", (e) => {
  e.target === modal ? modal.classList.remove("show-modal") : false;
});