"use strict";

// EXTRA 1: Mobile navigation menu
const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");

menuToggle.addEventListener("click", function () {
  const isOpen = navLinks.classList.toggle("open");

  menuToggle.setAttribute("aria-expanded", String(isOpen));
  menuToggle.setAttribute(
    "aria-label",
    isOpen ? "Close navigation menu" : "Open navigation menu",
  );
});

navLinks.querySelectorAll("a").forEach(function (link) {
  link.addEventListener("click", function () {
    navLinks.classList.remove("open");
    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.setAttribute("aria-label", "Open navigation menu");
  });
});

// EXTRA 2: Light and dark theme
const themeToggle = document.getElementById("theme-toggle");

themeToggle.addEventListener("click", function () {
  const isDark = document.body.classList.toggle("dark-theme");

  themeToggle.textContent = isDark ? "☀️" : "🌙";
  themeToggle.setAttribute(
    "aria-label",
    isDark ? "Switch to light theme" : "Switch to dark theme",
  );
});

// EXTRA 3: Filter projects
const filterButtons = document.querySelectorAll(".filter-btn");
const projectCards = document.querySelectorAll(".project-card");

filterButtons.forEach(function (button) {
  button.addEventListener("click", function () {
    const filter = button.dataset.filter;

    filterButtons.forEach(function (item) {
      const isActive = item === button;

      item.classList.toggle("active", isActive);
      item.setAttribute("aria-pressed", String(isActive));
    });

    projectCards.forEach(function (card) {
      const matches = filter === "all" || card.dataset.category === filter;

      card.hidden = !matches;
    });
  });
});

// EXTRA 4: Contact form validation
const contactForm = document.getElementById("contact-form");
const formFeedback = document.getElementById("form-feedback");

contactForm.addEventListener("submit", function (event) {
  event.preventDefault();

  if (!contactForm.checkValidity()) {
    contactForm.reportValidity();
    formFeedback.textContent = "Please check your information and try again.";
    return;
  }

  const name = document.getElementById("name").value.trim();

  formFeedback.textContent =
    "Thank you, " +
    name +
    "! Your form is valid. This demo does not send messages.";

  contactForm.reset();
});

// BONUS: Back-to-top button
const backToTop = document.getElementById("back-to-top");

window.addEventListener("scroll", function () {
  backToTop.classList.toggle("visible", window.scrollY > 300);
});

backToTop.addEventListener("click", function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

// BONUS: Automatically update the copyright year
document.getElementById("current-year").textContent = new Date().getFullYear();
