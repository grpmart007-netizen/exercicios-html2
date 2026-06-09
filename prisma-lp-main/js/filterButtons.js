/* FUNÇÃO DE FILTRO DE PROJETOS DE CURSOS */
document.addEventListener("DOMContentLoaded", function () {
  const filterButtons = document.querySelectorAll(".project-filter button");
  const projectCards = document.querySelectorAll(".project-card");

  if (filterButtons.length > 0) {
    const defaultCategory = filterButtons[0].textContent.trim();

    // Troca a classe do primeiro botão
    filterButtons[0].classList.remove("unfilled-btn");
    filterButtons[0].classList.add("filled-btn");

    // Filtra os projetos com base na categoria inicial
    projectCards.forEach((card) => {
      const projectCategory = card.getAttribute("data-project");

      if (projectCategory === defaultCategory) {
        card.style.display = "block";
      } else {
        card.style.display = "none";
      }
    });
  }

  filterButtons.forEach((button) => {
    button.addEventListener("click", function () {
      // Remove "filled-btn" de todos e adiciona "unfilled-btn"
      filterButtons.forEach((btn) => {
        btn.classList.remove("filled-btn");
        btn.classList.add("unfilled-btn");
      });

      // Adiciona "filled-btn" ao botão clicado e remove "unfilled-btn"
      this.classList.remove("unfilled-btn");
      this.classList.add("filled-btn");

      const category = this.textContent.trim();

      projectCards.forEach((card) => {
        const projectCategory = card.getAttribute("data-project");

        if (projectCategory === category) {
          card.style.display = "block";
        } else {
          card.style.display = "none";
        }
      });
    });
  });
});