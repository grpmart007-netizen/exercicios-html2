const hue = document.getElementById("hue");
const saturation = document.getElementById("saturation");
const lightness = document.getElementById("lightness");

const preview = document.getElementById("colorPreview");
const colorCode = document.getElementById("colorCode");

function atualizarCor() {
    const h = hue.value;
    const s = saturation.value;
    const l = lightness.value;

    const cor = `hsl(${h}, ${s}%, ${l}%)`;

    preview.style.backgroundColor = cor;
    colorCode.textContent = cor;
}

hue.addEventListener("input", atualizarCor);
saturation.addEventListener("input", atualizarCor);
lightness.addEventListener("input", atualizarCor);

// Exibe a cor inicial ao carregar a página
atualizarCor();
