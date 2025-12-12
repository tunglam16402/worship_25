async function loadComponent(id, file, callback) {
  const element = document.getElementById(id);
  if (!element) return;

  const html = await fetch(file).then((res) => res.text());
  element.innerHTML = html;

  if (callback) callback();
}

loadComponent("header-component", "/components/layout/header.html", initHeader);

loadComponent("hero-component", "/components/home/hero.html");
loadComponent("introduction-component", "/components/home/introduction.html");
loadComponent("forms-component", "/components/home/forms.html");
loadComponent("realms-component", "/components/home/realms.html");
loadComponent("ritual-component", "/components/home/ritual.html");

loadComponent("footer", "/components/layout/footer.html");

/* header*/
function initHeader() {
  const header = document.getElementById("header");

  window.addEventListener("scroll", () => {
    header.classList.toggle("header--scrolled", window.scrollY > 20);
  });

  /* mobile header */
  const mobileMenu = document.getElementById("mobileMenu");
  const mobilePanel = document.getElementById("mobilePanel");
  const mobileOverlay = document.getElementById("mobileOverlay");
  const toggleBtn = document.getElementById("mobileToggle");
  const closeBtn = document.getElementById("mobileClose");

  function openMenu() {
    mobileMenu.classList.add("mobile-menu--active");
    mobilePanel.classList.add("mobile-menu__panel--active");
    document.body.style.overflow = "hidden";
  }

  function closeMenu() {
    mobileMenu.classList.remove("mobile-menu--active");
    mobilePanel.classList.remove("mobile-menu__panel--active");
    document.body.style.overflow = "";
  }

  toggleBtn.addEventListener("click", openMenu);
  closeBtn.addEventListener("click", closeMenu);
  mobileOverlay.addEventListener("click", closeMenu);
}

