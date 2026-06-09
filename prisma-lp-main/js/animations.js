window.addEventListener("load", () => {
  /* ANIMAÇÃO DE SMOOTH LOADING */
  document.body.classList.add("loaded");

  /* MOVENDO A IMAGEM AO MOVIMENTAR O MOUSE */
  const heroImage = document.querySelector(".main-hero");

  // Adiciona um event listener para o movimento do mouse
  document.addEventListener("mousemove", (e) => {
    const { clientX: mouseX, clientY: mouseY } = e;

    // Calcula a posição relativa do mouse em relação à janela
    const centerX = window.innerWidth / 2;
    const centerY = window.innerHeight / 2;

    // Calcula o deslocamento baseado no movimento do mouse
    const deltaX = (mouseX - centerX) * 0.02;
    const deltaY = (mouseY - centerY) * 0.02;

    // Aplica a transformação para a imagem
    heroImage.style.transform = `translate(${deltaX}px, ${deltaY}px)`;
  });

  /* ANIMAÇÃO DE MOVER DROP-SHADOW DA IMAGEM */
  document.addEventListener("mousemove", function (e) {
    const heroImage = document.querySelector(".about-us-hero");
    const heroRect = heroImage.getBoundingClientRect();
    
    // Calcular a posição do mouse em relação à imagem
    const mouseX = e.clientX;
    const mouseY = e.clientY;
    const heroCenterX = heroRect.left + heroRect.width / 4;
    const heroCenterY = heroRect.top + heroRect.height / 4;
  
    // Calcular a distância entre o mouse e o centro da imagem
    const offsetX = (mouseX - heroCenterX) / 15;  // Ajuste a intensidade da sombra
    const offsetY = (mouseY - heroCenterY) / 15;  // Ajuste a intensidade da sombra
  
    // Aplicar o drop-shadow com base na posição do mouse
    heroImage.style.filter = `drop-shadow(${offsetX}px ${offsetY}px 30px rgba(0, 1, 20, 0.3))`;
  });
  
});
