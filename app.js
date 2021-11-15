let input = document.querySelector("input");
input.addEventListener("change", () => {
  if (input.checked) {
    document.documentElement.setAttribute("data-value", "dark-theme");
    document.documentElement.classList.add("transition");
  } else {
    document.documentElement.setAttribute("data-value", "light-theme");
    document.documentElement.classList.add("transition");
  }
});
let trans = () => {
  document.documentElement.classList.add("transition");
  window.setTimeout(() => {
    document.documentElement.classList.remove("transition");
  }, 1000);
};
