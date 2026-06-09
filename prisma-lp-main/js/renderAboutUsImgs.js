import aboutUsImgs from "../mocks/aboutUsImgs.js";

document.addEventListener("DOMContentLoaded", function () {
  const aboutUsImgsList = document.getElementById("about-us-list");
  const glideBullets = document.getElementById("glide-bullets");

  aboutUsImgs.forEach((aboutUsImg, index) => {
    // Criando o item de depoimento
    const li = document.createElement("li");
    li.classList.add("glide__slide", "about-us-card");
    li.innerHTML = `
      <img src="${aboutUsImg.image}" alt="Imagem do ${aboutUsImg.title}" />
      <p><span class="gradient-text">${aboutUsImg.title}</span>: ${aboutUsImg.description}</p>
    `;

    aboutUsImgsList.appendChild(li);

    // Criando o bullet de navegação
    const bullet = document.createElement("button");
    bullet.classList.add("glide__bullet");
    bullet.setAttribute("data-glide-dir", `=${index}`);
    glideBullets.appendChild(bullet);
  });

  // Inicializando o Glide.js
  new Glide(".about-us-glide", {
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
