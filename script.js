const AUTO_SLIDE_ENABLED = true;

const sidebar = document.getElementById("sidebar");
const overlay = document.getElementById("overlay");
const openBtn = document.getElementById("openMenu");
const closeBtn = document.getElementById("closeMenu");

const toggleMenu = () => {
  sidebar.classList.toggle("open");
  overlay.classList.toggle("active");
};

if (openBtn) openBtn.addEventListener("click", toggleMenu);
if (closeBtn) closeBtn.addEventListener("click", toggleMenu);
if (overlay) overlay.addEventListener("click", toggleMenu);

document.querySelectorAll(".sidebar-link").forEach((link) => {
  link.addEventListener("click", () => {
    sidebar.classList.remove("open");
    overlay.classList.remove("active");
  });
});

document.addEventListener("DOMContentLoaded", () => {
  let swiperConfig = {
    slidesPerView: 1,
    spaceBetween: 20,
    grabCursor: true,
    keyboard: {
      enabled: true,
    },

    breakpoints: {
      640: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      1024: {
        slidesPerView: 3,
        spaceBetween: 40,
      },
      1400: {
        slidesPerView: 4,
        spaceBetween: 40,
      },
    },
  };

  if (AUTO_SLIDE_ENABLED) {
    swiperConfig.autoplay = {
      delay: 2500,
      disableOnInteraction: false,
      pauseOnMouseEnter: true,
    };
    swiperConfig.loop = true;
  }

  var swiper = new Swiper(".mySwiper", swiperConfig);
});

window.addEventListener("load", () => {
  document.body.classList.add("loaded");
  const counters = document.querySelectorAll("[data-target]");
  counters.forEach((counter) => {
    const updateCount = () => {
      const target = +counter.getAttribute("data-target");
      const count = +counter.innerText;
      const speed = target / 40;
      if (count < target) {
        counter.innerText = Math.ceil(count + speed);
        setTimeout(updateCount, 35);
      } else {
        counter.innerText = target + "+";
      }
    };
    setTimeout(updateCount, 1000);
  });
});

const observerOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -50px 0px",
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
    }
  });
}, observerOptions);

document.addEventListener("DOMContentLoaded", () => {
  const animatedElements = document.querySelectorAll(
    ".about-text, .about-image-wrap, .benefits-header, .benefit-card, .team-header, .apply-container, .footer-content, .footer-brand, .footer-section",
  );
  animatedElements.forEach((el) => observer.observe(el));
});
