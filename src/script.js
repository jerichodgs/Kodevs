const toggle = document.getElementById("theme-toggle");
const body = document.body;

function syncToggleWithBody() {
  toggle.checked = body.classList.contains("light-mode");
}

syncToggleWithBody();

toggle.addEventListener("change", () => {
  body.classList.toggle("light-mode", toggle.checked);
});
