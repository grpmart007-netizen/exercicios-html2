const key = document.getElementById("key");
const code = document.getElementById("code");
const keyCode = document.getElementById("keyCode");

window.addEventListener("keydown", (event) => {
    key.textContent = event.key === " " ? "Espaço" : event.key;
    code.textContent = event.code;
    keyCode.textContent = event.keyCode;
});
