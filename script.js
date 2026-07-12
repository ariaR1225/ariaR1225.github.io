const filters = document.querySelectorAll("[data-filter]");
const projectCards = document.querySelectorAll(".project-card");

filters.forEach((button) => {
  button.addEventListener("click", () => {
    const selected = button.dataset.filter;

    filters.forEach((item) => item.classList.remove("active"));
    button.classList.add("active");

    projectCards.forEach((card) => {
      const shouldShow = selected === "all" || card.dataset.kind === selected;
      card.classList.toggle("is-hidden", !shouldShow);
    });
  });
});

const themeToggle = document.querySelector(".theme-toggle");

if (themeToggle) {
  // Dark is the default; "light" is opt-in via the toggle.
  const currentTheme = () => document.documentElement.dataset.theme || "dark";

  const renderToggle = () => {
    const dark = currentTheme() === "dark";
    themeToggle.textContent = dark ? "☀" : "☾";
    themeToggle.setAttribute("aria-label", dark ? "Switch to light mode" : "Switch to dark mode");
  };

  themeToggle.addEventListener("click", () => {
    const next = currentTheme() === "dark" ? "light" : "dark";
    document.documentElement.dataset.theme = next;
    try {
      localStorage.setItem("aria-theme", next);
    } catch (e) {
      /* private browsing */
    }
    renderToggle();
  });

  renderToggle();
}

const researchThumbs = document.querySelectorAll(".research-section .rail-card.media img");

if (researchThumbs.length) {
  const lightbox = document.createElement("div");
  lightbox.className = "lightbox";
  lightbox.setAttribute("role", "dialog");
  lightbox.setAttribute("aria-modal", "true");
  lightbox.hidden = true;

  const lightboxImg = document.createElement("img");
  lightboxImg.alt = "";

  const closeButton = document.createElement("button");
  closeButton.type = "button";
  closeButton.className = "lightbox-close";
  closeButton.setAttribute("aria-label", "Close preview");
  closeButton.textContent = "✕";

  lightbox.append(lightboxImg, closeButton);
  document.body.append(lightbox);

  let lastTrigger = null;

  const closeLightbox = () => {
    lightbox.classList.remove("is-open");
    lightbox.hidden = true;
    document.body.style.overflow = "";
    if (lastTrigger) lastTrigger.focus();
  };

  const openLightbox = (img) => {
    lastTrigger = img;
    lightboxImg.src = img.currentSrc || img.src;
    lightboxImg.alt = img.alt;
    lightbox.hidden = false;
    document.body.style.overflow = "hidden";
    requestAnimationFrame(() => lightbox.classList.add("is-open"));
    closeButton.focus();
  };

  researchThumbs.forEach((img) => {
    img.tabIndex = 0;
    img.setAttribute("role", "button");
    img.addEventListener("click", () => openLightbox(img));
    img.addEventListener("keydown", (event) => {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        openLightbox(img);
      }
    });
  });

  lightbox.addEventListener("click", closeLightbox);
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && !lightbox.hidden) closeLightbox();
  });
}
