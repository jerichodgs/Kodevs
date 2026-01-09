const desktopToggle = document.getElementById("theme-toggle-desktop");
const mobileToggle = document.getElementById("theme-toggle-mobile");
const mobileMenuToggle = document.getElementById("theme-toggle-mobile-menu");
const body = document.body;

const hamburger = document.getElementById("hamburger");
const mobileMenu = document.getElementById("mobile-menu");

function setTheme(isLight) {
  body.classList.toggle("light-mode", isLight);

  if (desktopToggle) desktopToggle.checked = isLight;
  if (mobileToggle) mobileToggle.checked = isLight;
  if (mobileMenuToggle) mobileMenuToggle.checked = isLight;
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

if (mobileMenuToggle) {
  mobileMenuToggle.addEventListener("change", () => {
    setTheme(mobileMenuToggle.checked);
  });
}

if (hamburger && mobileMenu) {
  hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    mobileMenu.classList.toggle("active");
  });

  const mobileLinks = mobileMenu.querySelectorAll('.link');
  mobileLinks.forEach(link => {
    link.addEventListener('click', () => {
      hamburger.classList.remove("active");
      mobileMenu.classList.remove("active");
    });
  });
}

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        
        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});
