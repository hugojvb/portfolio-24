function toggleDarkMode() {
    const element = document.querySelector("html");

    element.classList.toggle("dark");
}

function getDarkMode() {
  if (!window.matchMedia || !window.matchMedia('(prefers-color-scheme: dark)').matches) {
    return;
  }

  const element = document.querySelector("html");

  element.classList.add("dark");
}
