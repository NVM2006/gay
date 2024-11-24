const panel = document.querySelectorAll(".panel");
for (let i = 0; i < panel.length; i++) {
  panel[i].addEventListener("click", function () {
    removePanels();
    panel[i].classList.add("active");
  });
}
function removePanels() {
  for (let i = 0; i < panel.length; i++) {
    panel[i].classList.remove("active");
  }
}
