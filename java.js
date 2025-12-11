const colorBtn = document.getElementById("colorBtn");
const title = document.getElementById("title");
colorBtn.addEventListener("click", () => {
  title.style.color = "Green";
  colorBtn.textContent = "Color Changed!";
});
const darkModeBtn = document.getElementById("darkModeBtn");
darkModeBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
});

