const menuButton = document.getElementById("menuButton");
const dropdown = document.getElementById("dropdown");

menuButton.addEventListener("click", () => {
  dropdown.style.display =
    dropdown.style.display === "flex" ? "none" : "flex";
});

// Close dropdown when clicking outside
document.addEventListener("click", (e) => {
  if (!menuButton.contains(e.target) && !dropdown.contains(e.target)) {
    dropdown.style.display = "none";
  }
});
