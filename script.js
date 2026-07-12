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
