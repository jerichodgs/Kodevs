const desktopToggle = document.getElementById("theme-toggle-desktop");
const mobileToggle = document.getElementById("theme-toggle-mobile");
const mobileMenuToggle = document.getElementById("theme-toggle-mobile-menu");
const body = document.body;

// Use querySelectorAll to get both buttons
const hamburgers = document.querySelectorAll(".hamburger");
const mobileMenu = document.getElementById("mobile-menu");
const overlay = document.querySelector(".menu-overlay");

// --- Theme Logic ---
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

[desktopToggle, mobileToggle, mobileMenuToggle].forEach(toggle => {
  if (toggle) {
    toggle.addEventListener("change", () => setTheme(toggle.checked));
  }
});

// --- Sidebar Menu Logic ---

// Function to close everything
const closeAll = () => {
  hamburgers.forEach(h => h.classList.remove("active"));
  mobileMenu.classList.remove("active");
  if (overlay) overlay.classList.remove("active");
};

// Function to toggle everything
const toggleAll = () => {
  hamburgers.forEach(h => h.classList.toggle("active"));
  mobileMenu.classList.toggle("active");
  if (overlay) overlay.classList.toggle("active");
};

if (hamburgers.length > 0 && mobileMenu) {
  // Loop through each hamburger and attach the listener
  hamburgers.forEach(btn => {
    btn.addEventListener("click", toggleAll);
  });

  // Close when clicking a link
  const mobileLinks = mobileMenu.querySelectorAll('.link');
  mobileLinks.forEach(link => {
    link.addEventListener('click', closeAll);
  });

  // Close when clicking the dark overlay area
  if (overlay) {
    overlay.addEventListener("click", closeAll);
  }
}

// --- Smooth Scrolling ---
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