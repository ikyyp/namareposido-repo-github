const startBtn = document.getElementById("startBtn");
const loadingScreen = document.getElementById("loadingScreen");
const welcomeText = document.getElementById("welcomeText");
const mainContent = document.getElementById("mainContent");
const loadingText = document.getElementById("loader");
const bgMusic = document.getElementById("bgMusic");

startBtn.addEventListener("click", () => {
  document.querySelector(".intro").style.display = "none";
  loadingScreen.style.display = "flex";

  let percent = 0;
  const interval = setInterval(() => {
    loadingText.textContent = `Loading... ${percent}%`;
    percent++;
    if (percent > 100) {
      clearInterval(interval);
      loadingScreen.style.display = "none";
      mainContent.classList.remove("hidden");
      bgMusic.play();
      typeText();
    }
  }, 30);
});

const lines = [
  "Nama Lengkap: Muhammad Rizky F.",
  "Panggilan: Ikyy",
  "Tinggal: Tembilahan",
  "Hobi: Bikin bot WhatsApp dan ngoding",
  "Sekarang sedang mengerjakan proyek bot WhatsApp bernama ZERAKION Multi Device",
  "Bot ini punya fitur berlimpah yang kamu butuhkan!",
];

let currentLine = 0;
let currentChar = 0;
let container = document.querySelector(".typed-text");

function typeText() {
  if (currentLine < lines.length) {
    if (currentChar < lines[currentLine].length) {
      container.innerHTML += lines[currentLine].charAt(currentChar);
      currentChar++;
      setTimeout(typeText, 50);
    } else {
      container.innerHTML += "<br/>";
      currentLine++;
      currentChar = 0;
      setTimeout(typeText, 500);
    }
  }
}