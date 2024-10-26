// Importar Bootstrap y GSAP
import "bootstrap";
import gsap from "gsap";
import LocomotiveScroll from "locomotive-scroll";

// Configurar Locomotive Scroll
const scroll = new LocomotiveScroll({
  el: document.querySelector("[data-scroll-container]"),
  smooth: true,
});

// Botón de desplazamiento superior
const topButton = document.getElementById("back-to-top");
window.addEventListener("scroll", () => {
  if (window.scrollY > 200) {
    topButton.style.display = "block";
  } else {
    topButton.style.display = "none";
  }
});
topButton.addEventListener("click", () => {
  scroll.scrollTo(0);
});

// Configurar animaciones de GSAP para el menú y otros elementos
gsap.from(".dropdown-menu", {
  opacity: 0,
  duration: 0.5,
  y: -10,
  paused: true,
  ease: "power1.inOut",
});

// Accordion
document.addEventListener("DOMContentLoaded", function () {
  const items = document.querySelectorAll(".accordion-item-image");
  const card = document.getElementById("card");

  // Acordeón
  items.forEach((item) => {
    const button = item.querySelector(".accordion-image-button");

    button.addEventListener("click", function () {
      const isActive = button.classList.contains("active");

      // Close all items
      items.forEach((i) => {
        i.querySelector(".accordion-image-button").classList.remove("active");
        i.querySelector(".accordion-image-content").style.maxHeight = null;
        i.querySelector(".accordion-image-content").style.padding =
          "0 20px 0 20px";
      });

      // If the clicked item was not active, open it
      if (!isActive) {
        button.classList.add("active");
        const content = button.nextElementSibling;
        content.style.maxHeight = content.scrollHeight + "px";
        content.style.padding = "15px 20px 30px"; // Agregar padding-bottom
      }
    });
  });

  // Card effect
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        card.classList.add("visible");
      } else {
        card.classList.remove("visible");
      }
    });
  });

  observer.observe(card);
});
