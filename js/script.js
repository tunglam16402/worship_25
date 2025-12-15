async function loadComponent(id, file, callback) {
  const element = document.getElementById(id);
  if (!element) return;

  const html = await fetch(file).then((res) => res.text());
  element.innerHTML = html;

  if (callback) callback();
}

loadComponent("header-component", "/components/layout/header.html", initHeader);

loadComponent("hero-component", "/components/home/hero.html", initHeroSlider);
loadComponent("introduction-component", "/components/home/introduction.html");
loadComponent("forms-component", "/components/home/forms.html");
loadComponent("realms-component", "/components/home/realms.html");
loadComponent("ritual-component", "/components/home/ritual.html");

loadComponent("footer", "/components/layout/footer.html");

/* header*/
function initHeader() {
  const header = document.getElementById("header");
  const path = window.location.pathname;
  const isHome = path === "/" || path.endsWith("index.html");

  if (!isHome) {
    header.classList.add("header--scrolled");
  } else {
    window.addEventListener("scroll", () => {
      header.classList.toggle("header--scrolled", window.scrollY > 20);
    });
  }

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

// swpier
function initHeroSlider() {
  const hero = document.querySelector("[data-hero]");
  if (!hero) return;

  const slides = hero.querySelectorAll(".hero-slide");
  const pagination = hero.querySelector(".hero-pagination");

  let current = 0;
  const total = slides.length;
  const intervalTime = 6000;

  slides.forEach((_, index) => {
    const bullet = document.createElement("span");
    bullet.className = "bullet";
    if (index === 0) bullet.classList.add("active");

    bullet.addEventListener("click", () => {
      goToSlide(index);
      resetAutoSlide();
    });

    pagination.appendChild(bullet);
  });

  const bullets = pagination.querySelectorAll(".bullet");

  function goToSlide(index) {
    slides[current].classList.remove("active");
    bullets[current].classList.remove("active");

    current = index;

    slides[current].classList.add("active");
    bullets[current].classList.add("active");
  }

  function nextSlide() {
    goToSlide((current + 1) % total);
  }

  let autoSlide = setInterval(nextSlide, intervalTime);

  function resetAutoSlide() {
    clearInterval(autoSlide);
    autoSlide = setInterval(nextSlide, intervalTime);
  }
}
