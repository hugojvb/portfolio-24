function toggleDarkMode() {
  const element = document.querySelector("html");
  element.classList.toggle("dark");

  const darkMode = element.classList.contains("dark") ? "true" : "false";
  localStorage.setItem("darkMode", darkMode);
}

function getDarkMode() {
  const element = document.querySelector("html");
  if (localStorage.getItem("darkMode") === "false") {
    element.classList.remove("dark");

    return;
  }

  if (
    localStorage.getItem("darkMode") ||
    !window.matchMedia ||
    !window.matchMedia("(prefers-color-scheme: light)").matches
  ) {
    return;
  }

  element.classList.remove("dark");
}
