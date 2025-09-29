const desktopToggle = document.getElementById("theme-toggle-desktop");
const mobileToggle = document.getElementById("theme-toggle-mobile");
const body = document.body;

function setTheme(isLight) {
  body.classList.toggle("light-mode", isLight);

  if (desktopToggle) desktopToggle.checked = isLight;
  if (mobileToggle) mobileToggle.checked = isLight;
}

function syncToggleWithBody() {
  const isLight = body.classList.contains("light-mode");
  setTheme(isLight);
}

syncToggleWithBody();

if (desktopToggle) {
  desktopToggle.addEventListener("change", () => {
    setTheme(desktopToggle.checked);
  });
}

if (mobileToggle) {
  mobileToggle.addEventListener("change", () => {
    setTheme(mobileToggle.checked);
  });
}
