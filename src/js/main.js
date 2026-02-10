"use strict"

import "../css/main.scss";

// Ändra till mörkt eller ljust läge
let savedTheme = localStorage.getItem("theme");
let themeSwitch = document.getElementById("theme-toggle");

if (savedTheme === "dark") {
    document.body.classList.add("dark");
    themeSwitch.checked = true;
}

themeSwitch.addEventListener('change', () => {
    if (themeSwitch.checked) {
        document.body.classList.add("dark");
        localStorage.setItem("theme", "dark");
    } else {
        document.body.classList.remove("dark");
        localStorage.setItem("theme", "light")
    }
});