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
      localStorage.setItem("theme", next);
    } catch (e) {
      /* private browsing */
    }
    renderToggle();
  });

  renderToggle();
}
