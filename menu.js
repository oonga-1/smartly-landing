const btn = document.getElementById("menuButton");
const menu = document.getElementById("dropdown");

btn.onclick = () => {
  menu.style.display = menu.style.display === "flex" ? "none" : "flex";
};

document.onclick = (e) => {
  if (!btn.contains(e.target) && !menu.contains(e.target)) {
    menu.style.display = "none";
  }
};
