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

function displayDetailsBlock() {
  const detailsIds = ["js", "php", "go", "now", "default"];

  detailsIds.forEach(function (id) {
    if (window.location.hash === "#" + id || !window.location.hash && id === "default") {
      var detailsElement = document.querySelector("details#" + id);
      if (detailsElement) {
        detailsElement.setAttribute("open", true);
      }
    }
  });
}

function toggleMenu() {
  const header = document.getElementById("header");
  const navbar = document.getElementById("navbar");
  const menu = document.getElementById("menu");
  const body = document.querySelector("body");
  const burguerIcon = document.getElementById("burguer-icon");
  const closeIcon = document.getElementById("close-icon");

  const isActive = !menu.classList.contains("hidden");

  if (!isActive) {
    header.classList.add("fixed", "h-screen", "w-screen", "z-10");

    menu.classList.add("text-2xl", "flex", "flex-col", "h-1/2", "justify-around", "items-center");

    navbar.classList.add("flex-col", "h-full");

    burguerIcon.classList.add("hidden");
    closeIcon.classList.remove("hidden");
    body.classList.add("overflow-hidden");
  } else {
    header.classList.remove("fixed", "h-full", "w-screen", "z-10");

    menu.classList.remove("text-2xl", "flex", "flex-col", "justify-around", "items-center");

    navbar.classList.remove("flex-col", "h-full");

    burguerIcon.classList.remove("hidden");
    closeIcon.classList.add("hidden");
    body.classList.remove("overflow-hidden");
  }

  menu.classList.toggle("hidden");
}

(function onLoad() {
  window.onload = function () {
    getDarkMode();
    displayDetailsBlock();
  };
})();
