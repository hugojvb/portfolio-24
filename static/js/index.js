function toggleDarkMode(){const e=document.querySelector("html");e.classList.toggle("dark");const t=e.classList.contains("dark")?"true":"false";localStorage.setItem("darkMode",t)}function getDarkMode(){const e=document.querySelector("html");if(localStorage.getItem("darkMode")==="false"){e.classList.remove("dark");return}localStorage.getItem("darkMode")||!window.matchMedia||!window.matchMedia("(prefers-color-scheme: light)").matches||e.classList.remove("dark")}function displayDetailsBlock(){["js","php","go","now","default"].forEach(function(t){if(window.location.hash==="#"+t||!window.location.hash&&t==="default"){var o=document.querySelector("details#"+t);o&&o.setAttribute("open",!0)}})}function toggleMenu(){window.scrollTo(0,0);const e=document.getElementById("header"),t=document.getElementById("navbar"),o=document.getElementById("menu"),s=document.querySelector("body"),n=document.getElementById("burguer-icon"),c=document.getElementById("close-icon");!o.classList.contains("hidden")?(e.classList.remove("fixed","h-screen","w-screen","justify-between"),o.classList.remove("text-2xl","flex","flex-col"),t.classList.remove("flex-col"),n.classList.remove("hidden"),c.classList.add("hidden"),s.classList.remove("overflow-hidden")):(e.classList.add("fixed","h-screen","w-screen","justify-between"),o.classList.add("text-2xl","flex","flex-col"),t.classList.add("flex-col"),n.classList.add("hidden"),c.classList.remove("hidden"),s.classList.add("overflow-hidden")),o.classList.toggle("hidden")}(function(){window.onload=function(){getDarkMode(),displayDetailsBlock()}})();
