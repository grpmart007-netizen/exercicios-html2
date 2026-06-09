import testimonials from "../mocks/testimonials.js";

document.addEventListener("DOMContentLoaded", function () {
  const testimonialsList = document.getElementById("testimonials-list");
  const glideBullets = document.getElementById("glide-bullets");

  testimonials.forEach((testimonial, index) => {
    // Criando o item de depoimento
    const li = document.createElement("li");
    li.classList.add("glide__slide", "student-testimony-card", "glass-bg");
    li.innerHTML = `
      <p>${testimonial.message}</p>
      <div class="student-container">
        <img src="${testimonial.studentImage}" alt="Imagem do aluno" />
        <div>
          <strong>${testimonial.student}</strong>
          <p>${testimonial.email}</p>
        </div>
      </div>
    `;

    testimonialsList.appendChild(li);

    // Criando o bullet de navegação
    const bullet = document.createElement("button");
    bullet.classList.add("glide__bullet");
    bullet.setAttribute("data-glide-dir", `=${index}`);
    glideBullets.appendChild(bullet);
  });

  // Inicializando o Glide.js
  new Glide(".testimonial-glide", {
    type: "carousel",
    perView: 3,
    autoplay: 3000,
    hoverpause: true,
    animationDuration: 800,
    breakpoints: {
      1440: { perView: 2 },
      1024: { perView: 1 }
    }
  }).mount();
});
