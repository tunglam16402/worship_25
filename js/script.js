async function loadComponent(id, file, callback) {
  const element = document.getElementById(id);
  if (!element) return;

  const html = await fetch(file).then((res) => res.text());
  element.innerHTML = html;

  if (callback) callback();
}

loadComponent("header", "/components/layout/header.html", initHeader);

loadComponent("hero", "/components/home/hero.html");
loadComponent("introduction", "/components/home/introduction.html");
loadComponent("forms", "/components/home/forms.html");
loadComponent("realms", "/components/home/realms.html");
loadComponent("ritual", "/components/home/ritual.html");

loadComponent("footer", "/components/layout/footer.html");

/* ========= HEADER LOGIC ========= */
function initHeader() {
  const header = document.getElementById("header");
  const headerTop = document.getElementById("headerTop");
  const headerMain = document.getElementById("headerMain");

  window.addEventListener("scroll", () => {
    const isMobile = window.innerWidth <= 768;

    if (window.scrollY > 20) {
      header.classList.add("header--shrink");

      if (isMobile) {
        headerTop.style.background = "#ffffff";
        headerTop.style.color = "#333";
        headerMain.style.background = "#ffffff";
      } else {
        headerTop.style.background =
          "linear-gradient(to right, #fef9e7, #fbe7c6)";
        headerTop.style.color = "#333";
      }
    } else {
      header.classList.remove("header--shrink");
      if (isMobile) {
        headerTop.style.background = "rgba(255,255,255,0)";
        headerMain.style.background = "rgba(255,255,255,0)";
        headerTop.style.color = "#fff";
      } else {
        headerTop.style.background = "rgba(0,0,0,0.3)";
        headerTop.style.color = "white";
      }
    }
  });

  /* ========= MOBILE MENU ========= */
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

document.addEventListener("DOMContentLoaded", () => {
  const slides = document.querySelectorAll(".hero-slide");
  const pagination = document.querySelector(".hero-pagination");

  let current = 0;

  // Create pagination bullets
  slides.forEach((_, i) => {
    const dot = document.createElement("div");
    dot.className = "bullet" + (i === 0 ? " active" : "");
    dot.dataset.index = i;
    pagination.appendChild(dot);
  });

  const bullets = document.querySelectorAll(".bullet");

  function showSlide(index) {
    slides.forEach((s) => s.classList.remove("active"));
    bullets.forEach((b) => b.classList.remove("active"));

    slides[index].classList.add("active");
    bullets[index].classList.add("active");
  }

  function nextSlide() {
    current = (current + 1) % slides.length;
    showSlide(current);
  }

  bullets.forEach((b) =>
    b.addEventListener("click", () => {
      current = Number(b.dataset.index);
      showSlide(current);
    })
  );

  setInterval(nextSlide, 6000); // auto slide
});
