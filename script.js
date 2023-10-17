///////////////////////////////////////////////////////////
// Set current year
const yearEl = document.querySelector(".year");
const currentYear = new Date().getFullYear();
yearEl.textContent = currentYear;

///////////////////////////////////////////////////////////
// Make Mobile Navigation Work

// const btnNavEL = document.querySelector(".btn-mobile-nav");
// const headerEL = document.querySelector(".header");

// btnNavEL.addEventListener("click", function () {
//   headerEL.classList.toggle("nav-open");
// });

const openEL = document.querySelector(".open");
const closeEL = document.querySelector(".close");
const headerEL = document.querySelector(".header");

openEL.addEventListener("click", function () {
  headerEL.classList.add("nav-open");
});
closeEL.addEventListener("click", function () {
  headerEL.classList.remove("nav-open");
});

///////////////////////////////////////////////////////////
// Smooth scrolling animation

const allLinks = document.querySelectorAll("a:link");

allLinks.forEach(function (link) {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    const href = link.getAttribute("href");

    // Scroll back to top
    if (href === "#")
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    // Scroll to other links
    if (href !== "#" && href.startsWith("#")) {
      const sectionEL = document.querySelector(href);
      sectionEL.scrollIntoView({ behavior: "smooth" });
    }

    // CLose mobile navigation
    if (link.classList.contains("main-nav-link"))
      headerEL.classList.toggle("nav-open");
  });
});

///////////////////////////////////////////////////////////
// Sticky navigation

const sectionHeroEL = document.querySelector(".hero");

const obs = new IntersectionObserver(
  function (entries) {
    const ent = entries[0];
    if (ent.isIntersecting === false) {
      document.body.classList.add("sticky");
    }

    if (ent.isIntersecting === true) {
      document.body.classList.remove("sticky");
    }
  },
  {
    // In the viewport
    root: null,
    threshold: 0,
    rootMargin: "-70px",
  }
);
obs.observe(sectionHeroEL);
