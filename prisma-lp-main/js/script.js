import courses from "../mocks/courses.js";
/* EFEITO CARROUSSEL (MARQUEE) DE CURSOS */
document.addEventListener("DOMContentLoaded", function () {
  const marqueeContainers = document.querySelectorAll(".marquee-container");

  marqueeContainers.forEach((container) => {
    container.innerHTML = "";

    // Criamos o conteúdo duplicado para o efeito contínuo
    const totalItems = courses.length * 4;

    for (let i = 0; i < totalItems; i++) {
      const textElement = document.createElement("p");
      textElement.textContent = courses[i % courses.length];

      const imgElement = document.createElement("img");
      imgElement.src = "assets/icons/star.png";
      imgElement.alt = "Ícone de estrela roxo";

      container.appendChild(textElement);
      container.appendChild(imgElement);
    }
  });
});

/* BOTÕES DE FILTRO DE PROJETO */
document.addEventListener("DOMContentLoaded", function () {
  const filterContainer = document.getElementById("project-filter");

  courses.forEach((course) => {
    const button = document.createElement("button");
    button.classList.add("unfilled-btn");
    button.type = "button";
    button.textContent = course;

    filterContainer.appendChild(button);
  });
});
