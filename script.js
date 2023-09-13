"use strict";

// ////////////////////////////////////////
// NAV
const navEl = document.querySelector(".nav");
const navHeight = navEl.getBoundingClientRect().height;
const logo = document.querySelector(".nav__logo");
const navLinksContainer = document.querySelector(".nav__list");
const skillsScrollBtn = document.querySelector(".nav__link--skills");
const sectionSkills = document.querySelector("#section--skills");
const sectionProjects = document.querySelector("#section--projects");
const learnBtn = document.querySelector(".hero__btn");
const headerEl = document.querySelector(".header");
const heroSection = document.querySelector(".hero");
const imgTargets = document.querySelectorAll(".project__img");
const navLinks = document.querySelectorAll(".nav__link");
const btnOpen = document.querySelector(".mobile-nav__icon[name=menu-outline]");
const btnClose = document.querySelector(
  ".mobile-nav__icon[name=close-outline]"
);
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// NAV OPEN
btnOpen.addEventListener("click", () => {
  navEl.classList.add("nav-open");
});
btnClose.addEventListener("click", () => {
  navEl.classList.remove("nav-open");
});

// SMOOTH SCROLLING

navLinksContainer.addEventListener("click", function (e) {
  if (e.target.classList.contains("move")) {
    const id = e.target.getAttribute("href");
    const position = document.querySelector(id).getBoundingClientRect();
    window.scrollTo({
      left: position.left + window.pageXOffset,
      top: position.top - navHeight + window.pageYOffset,
      behavior: "smooth",
    });
  }

  if (navEl.classList.contains("nav-open")) {
    navEl.classList.remove("nav-open");
  } else {
    return;
  }
});

learnBtn.addEventListener("click", function () {
  const skillscoords = sectionSkills.getBoundingClientRect();

  window.scrollTo({
    left: skillscoords.left + window.pageXOffset,
    top: skillscoords.top - navHeight + window.pageYOffset,
    behavior: "smooth",
  });
});

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// STICKY NAV

const stickyNav = function (entries) {
  const [entry] = entries;

  if (!entry.isIntersecting) {
    navEl.classList.add("sticky--show");
  } else {
    navEl.classList.remove("sticky--show");
  }
};

const obsOptions1 = {
  root: null,
  threshold: 0,
  rootMargin: `-${navHeight + 30}px`,
};
const heroObserver = new IntersectionObserver(stickyNav, obsOptions1);
heroObserver.observe(heroSection);

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Adding Animations

const addComeInAnimation = function (entries, observer) {
  const [entry] = entries;

  if (entry.isIntersecting) {
    entry.target.classList.remove("comeInAnimation");
    //To stop observing the containers
    observer.unobserve(entry.target);
  } else return;
};

//Selecting all containers and the footer
const allContainers = document.querySelectorAll(".come");

const containerObserver = new IntersectionObserver(addComeInAnimation, {
  root: null,
  threshold: 0,
});
allContainers.forEach(function (container) {
  containerObserver.observe(container);
  container.classList.add("comeInAnimation");
});
