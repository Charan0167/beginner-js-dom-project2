const content = document.querySelector(".content");

content.addEventListener("click", (e) => {
  if (e.target.classList.contains("q")) {
    e.target.parentElement.classList.toggle("active");
  }
});
