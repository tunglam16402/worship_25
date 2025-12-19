//import homepage section to home page
async function loadComponent(id, file, callback) {
  const element = document.getElementById(id);
  if (!element) return;

  const html = await fetch(file).then((res) => res.text());
  element.innerHTML = html;

  if (callback) callback(element);
}

Promise.all([
  loadComponent(
    "header-component",
    "/components/layout/header.html",
    initHeader
  ),
  loadComponent("hero-component", "/components/home/hero.html", initSliders),
  loadComponent("introduction-component", "/components/home/introduction.html"),
  loadComponent("forms-component", "/components/home/forms.html"),
  loadComponent("realms-component", "/components/home/realms.html"),
  loadComponent("ritual-component", "/components/home/ritual.html"),
]).then(() => {
  initScrollAnimation();
});

loadComponent("footer", "/components/layout/footer.html");

/* header scroll*/
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

// swiper
function initSliders(root = document) {
  const sliders = root.querySelectorAll("[data-slider]");

  sliders.forEach((slider) => {
    if (slider.dataset.inited) return;
    slider.dataset.inited = "true";

    const slides = slider.querySelectorAll(".slider__slide");
    const pagination = slider.querySelector(".slider__pagination");

    if (!slides.length) return;

    let current = 0;
    const total = slides.length;
    const intervalTime = Number(slider.dataset.interval) || 6000;

    //pagination
    let bullets = [];

    if (pagination) {
      pagination.innerHTML = "";

      slides.forEach((_, index) => {
        const bullet = document.createElement("span");
        bullet.className = "slider__bullet";
        if (index === 0) bullet.classList.add("is-active");

        bullet.addEventListener("click", () => {
          goToSlide(index);
          resetAutoSlide();
        });

        pagination.appendChild(bullet);
        bullets.push(bullet);
      });
    }

    function goToSlide(index) {
      slides[current].classList.remove("is-active");
      bullets[current]?.classList.remove("is-active");

      current = index;

      slides[current].classList.add("is-active");
      bullets[current]?.classList.add("is-active");
    }

    function nextSlide() {
      goToSlide((current + 1) % total);
    }

    //auto slide
    let autoSlide = setInterval(nextSlide, intervalTime);

    function resetAutoSlide() {
      clearInterval(autoSlide);
      autoSlide = setInterval(nextSlide, intervalTime);
    }

    //swipe slide
    let startX = 0;
    let isDragging = false;

    slider.addEventListener("pointerdown", (e) => {
      isDragging = true;
      startX = e.clientX;
    });

    slider.addEventListener("pointerup", (e) => {
      if (!isDragging) return;
      isDragging = false;

      const diff = startX - e.clientX;
      if (Math.abs(diff) < 60) return;

      diff > 0
        ? goToSlide((current + 1) % total)
        : goToSlide((current - 1 + total) % total);

      resetAutoSlide();
    });
  });
}

//scroll animation
function initScrollAnimation() {
  // auto add animation heading
  document.querySelectorAll("h1, h2").forEach((el) => {
    if (!el.hasAttribute("data-animate")) {
      el.setAttribute("data-animate", "fade-up");
    }
  });

  // auto add animation page title lines
  document
    .querySelectorAll(".page-title__line--left")
    .forEach((el) => (el.dataset.animate = "fade-left"));

  document
    .querySelectorAll(".page-title__line--right")
    .forEach((el) => (el.dataset.animate = "fade-right"));

  // collect animated items
  const animatedItems = document.querySelectorAll("[data-animate]");
  if (!animatedItems.length) return;

  // observer
  const observer = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;

        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      });
    },
    { threshold: 0.2 }
  );

  animatedItems.forEach((item) => observer.observe(item));
}

// realms detail
