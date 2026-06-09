document.addEventListener("DOMContentLoaded", function () {
  const menuButton = document.querySelector(".hamburger-menu");
  const closeButton = document.querySelector(".close-menu");
  const navLinks = document.querySelector(".nav-links");
  const links = navLinks.querySelectorAll("a");

  const toggleMenu = () => {
    const isOpen = navLinks.classList.toggle("active");

    navLinks.classList.toggle("glass-bg", isOpen);
    menuButton.classList.toggle("hidden", isOpen);
    closeButton.classList.toggle("hidden", !isOpen);
  };

  if (menuButton && navLinks && closeButton) {
    menuButton.addEventListener("click", () => {
      if (window.innerWidth < 1025) {
        toggleMenu();
      }
    });

    closeButton.addEventListener("click", () => {
      toggleMenu();
    });

    links.forEach((link) => {
      link.addEventListener("click", () => {
        if (window.innerWidth < 1025) {
          toggleMenu();
        }
      });
    });
  } else {
    console.error("Algum elemento do menu não foi encontrado.");
  }
});
