import { coursesJson } from "../mocks/courses.js";

document.addEventListener("DOMContentLoaded", function () {
  const carousel = document.getElementById("course-carousel");

  coursesJson.forEach((course) => {
    const card = document.createElement("li");

    card.className = "course-card";
    card.onclick = () => openWhatsApp(course.id);

    card.innerHTML = `
      <img class="course-thumb" src="${course.thumb}" alt="Imagem do curso de ${course.title}" />
      <img class="course-frame" src="assets/img/course-frame.png" alt="Moldura de curso" />
      <h3>${course.title}</h3>
    `;

    carousel.appendChild(card);
  });
});

function carouselButtons(className, idName) {
  const carousel = document.getElementById(idName);
  const leftBtn = document.querySelector(`.carousel-arrow.${className}.left`);
  const rightBtn = document.querySelector(`.carousel-arrow.${className}.right`);

  leftBtn.addEventListener("click", () => {
    carousel.scrollBy({ left: -150, behavior: "smooth" });
  });

  rightBtn.addEventListener("click", () => {
    carousel.scrollBy({ left: 150, behavior: "smooth" });
  });
}

carouselButtons("course", "course-carousel");
carouselButtons("project-filters", "project-filter");
carouselButtons("project", "projects-list");
