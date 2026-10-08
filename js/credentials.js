/*!
 * Sheldon Mendoza — credentials gallery lightbox
 * Opens a certificate at a larger size on the page; no dependencies.
 * Loaded only on /professional-development/.
 */
(function () {
  "use strict";

  var lightbox = document.getElementById("cred-lightbox");
  if (!lightbox) return;

  var img = lightbox.querySelector(".lightbox-img");
  var title = lightbox.querySelector(".lightbox-title");
  var meta = lightbox.querySelector(".lightbox-meta");
  var pdfLink = lightbox.querySelector(".lightbox-pdf");
  var closeBtn = lightbox.querySelector(".lightbox-close");
  var backdrop = lightbox.querySelector(".lightbox-backdrop");
  var lastFocus = null;

  function open(card) {
    var mediaImg = card.querySelector(".cred-media img");
    var heading = card.querySelector(".cred-body h3");

    img.src = mediaImg.currentSrc || mediaImg.src;
    img.alt = mediaImg.alt;
    title.textContent = heading ? heading.textContent : "";
    meta.textContent = card.getAttribute("data-meta") || "";

    var pdf = card.getAttribute("data-pdf");
    if (pdf) {
      pdfLink.href = pdf;
      pdfLink.hidden = false;
    } else {
      pdfLink.removeAttribute("href");
      pdfLink.hidden = true;
    }

    lastFocus = document.activeElement;
    lightbox.hidden = false;
    document.body.classList.add("lightbox-open");
    closeBtn.focus();
  }

  function close() {
    lightbox.hidden = true;
    document.body.classList.remove("lightbox-open");
    img.removeAttribute("src");
    img.removeAttribute("alt");
    if (lastFocus && typeof lastFocus.focus === "function") {
      lastFocus.focus();
    }
  }

  var cards = document.querySelectorAll(".cred-card");
  cards.forEach(function (card) {
    var trigger = card.querySelector(".cred-media");
    if (!trigger) return;
    trigger.addEventListener("click", function () {
      open(card);
    });
  });

  closeBtn.addEventListener("click", close);
  backdrop.addEventListener("click", close);

  document.addEventListener("keydown", function (event) {
    if (!lightbox.hidden && event.key === "Escape") {
      close();
    }
  });
})();
