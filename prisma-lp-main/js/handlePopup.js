let intervalId;

function openPopup() {
  document.getElementById("videoPopup").style.display = "flex";
  document.getElementById("popupVideo").play();
}

function closePopup() {
  let video = document.getElementById("popupVideo");
  video.pause();
  video.currentTime = 0;
  document.getElementById("videoPopup").style.display = "none";

  clearInterval(intervalId);
}

document.getElementById("about-link").addEventListener("click", () => {
  if (intervalId) clearInterval(intervalId);
  intervalId = setInterval(openPopup, 1000);
});

window.openPopup = openPopup;
window.closePopup = closePopup;
