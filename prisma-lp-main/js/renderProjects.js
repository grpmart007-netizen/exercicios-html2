const projectContainer = document.querySelector(".project-card-container");
import studentProjects from "../mocks/studentProjects.js";

function renderProjects(filter = null) {
  projectContainer.innerHTML = "";
  const filteredProjects = filter
    ? studentProjects.filter((p) => p.category === filter)
    : studentProjects;

  filteredProjects.forEach((project) => {
    const card = document.createElement("div");
    card.classList.add("project-card", "glass-bg");
    card.setAttribute("data-project", project.category);
    card.addEventListener("click", () => {
      openProjectPopup(project.id);
    });

    const projectImage =
      window.innerWidth >= 1025 ? project.desktopImage : project.mobileImage;

    card.innerHTML = `
      <img class="project-card-image" src="${projectImage}" alt="Imagem do projeto" />
      <h3>${project.name}</h3>
      <div class="project-card-student">
        <strong>${project.student}</strong>
        <p>${project.email}</p>
      </div>
      <button class="filled-btn">Veja o projeto</button>
    `;
    
    const projectPopup = document.createElement("div");
    projectPopup.classList.add("project-popup-card", "popup");
    projectPopup.setAttribute("data-id", project.id);
    projectPopup.innerHTML = `
      <div class="popup-content">
        <div class="project-popup-card-header">
          <button class="close-btn">✖</button>
        </div>
        <div class="project-popup-card-body">
          
          <!-- Aqui você pode ter as imagens lado a lado -->
          <div class="project-popup-images-carousel">
            
            <!-- Essa imagem fica normal -->
            <div class="project-wrapper">
              <img src="${projectImage}" alt="Imagem do projeto" />
            </div>
            <!-- Essa imagem é que vai ter a rolagem -->
            <div class="image-wrapper scroll-vertical">
              <img src="${project.rawImage}" alt="Imagem do código do projeto" />
            </div>

            <div class="switch-container">
              <label class="switch">
                <input type="checkbox">
                <span class="slider round"></span>
              </label>
              <p>Código</p>
            </div>
          </div>

          <div class="project-popup-card-student">
            <div class="project-popup-card-info">
              <div>
                <h3>${project.name}</h3>
                <h4>${project.student}</h4>
                <p>${project.description}</p>
              </div>
              <a href="${project.portfolio}" target="_blank">Ver no portfolio</a>
            </div>
          </div>

        </div>
      </div>
    `;

    projectContainer.appendChild(card);
    projectContainer.appendChild(projectPopup);

    const closeBtn = projectPopup.querySelector(".close-btn");
    closeBtn.addEventListener("click", () => {
      projectPopup.classList.remove("active");
    });

    const images = projectPopup.querySelectorAll(
      ".project-popup-images-carousel img"
    );
    const toggleButton = projectPopup.querySelector(".switch input");

    let showRawImage = false;
    toggleButton.addEventListener("change", () => {
      showRawImage = toggleButton.checked;
      images[0].style.display = showRawImage ? "none" : "block";
      images[1].style.display = showRawImage ? "block" : "none";
    });

    images[1].style.display = "none";
  });
}

function openProjectPopup(id) {
  if (!id) {
    alert("ID não encontrado!");
    return;
  }

  const projectPopup = document.querySelector(
    `.project-popup-card[data-id="${id}"]`
  );

  const projectsPopup = document.querySelectorAll(".project-popup-card");
  projectsPopup.forEach((popup) => {
    popup.classList.remove("active");
  });

  projectPopup.classList.add("active");
}

renderProjects();
