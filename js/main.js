/*!
 * Sheldon Mendoza — site scripts
 * Mobile nav toggle, active-link highlighting, restrained scroll reveal.
 * No dependencies.
 */
(function () {
  "use strict";

  /* Mobile navigation toggle */
  var toggle = document.querySelector(".nav-toggle");
  var nav = document.querySelector(".main-nav");

  if (toggle && nav) {
    toggle.addEventListener("click", function () {
      var isOpen = nav.classList.toggle("is-open");
      toggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
      document.body.style.overflow = isOpen ? "hidden" : "";
    });

    nav.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        nav.classList.remove("is-open");
        toggle.setAttribute("aria-expanded", "false");
        document.body.style.overflow = "";
      });
    });

    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape" && nav.classList.contains("is-open")) {
        nav.classList.remove("is-open");
        toggle.setAttribute("aria-expanded", "false");
        document.body.style.overflow = "";
        toggle.focus();
      }
    });
  }

  /* Active nav link based on current path */
  var here = window.location.pathname.replace(/\/index\.html$/, "/");
  document.querySelectorAll(".nav-links a, .footer-nav a").forEach(function (link) {
    var linkPath = link.getAttribute("href");
    if (!linkPath) return;
    if (linkPath === here || (linkPath !== "/" && here.indexOf(linkPath) === 0)) {
      link.setAttribute("aria-current", "page");
    }
  });

  /* Restrained scroll-reveal */
  var revealEls = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window && revealEls.length) {
    var io = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );
    revealEls.forEach(function (el) {
      io.observe(el);
    });
  } else {
    revealEls.forEach(function (el) {
      el.classList.add("is-visible");
    });
  }

  /* Header background intensifies slightly on scroll */
  var header = document.querySelector(".site-header");
  if (header) {
    var onScroll = function () {
      if (window.scrollY > 12) {
        header.style.borderBottomColor = "rgba(255,255,255,0.14)";
      } else {
        header.style.borderBottomColor = "";
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
  }
})();
