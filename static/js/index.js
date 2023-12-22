function toggleDarkMode() {
    const element = document.querySelector("html");

    element.classList.toggle("dark");
    if (!element.classList.contains("dark")) {
      return;
    }

    localStorage.setItem("darkMode", "true");
}

function getDarkMode() {
  if (localStorage.getItem("darkMode") === "true") {
    element.classList.add("dark");

    return;
  }

  if (!window.matchMedia || !window.matchMedia('(prefers-color-scheme: dark)').matches) {
    return;
  }

  document.querySelector("html").classList.add("dark");
}
