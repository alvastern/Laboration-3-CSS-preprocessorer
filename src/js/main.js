"use strict"

import "../css/main.scss";

// Ändra till mörkt eller ljust läge
let savedTheme = localStorage.getItem("theme");
let themeSwitch = document.getElementById("theme-toggle");

if (savedTheme === "dark") {
    document.body.classList.add("dark");
    document.body.classList.remove("light");
    themeSwitch.checked = true;
}

if (savedTheme === "light") {
    document.body.classList.add("light");
    document.body.classList.remove("dark");
    themeSwitch.checked = false;
}

themeSwitch.addEventListener('change', () => {
    if (themeSwitch.checked) {
        document.body.classList.add("dark");
        document.body.classList.remove("light");
        localStorage.setItem("theme", "dark");
    } else {
        document.body.classList.add("light");
        document.body.classList.remove("dark");
        localStorage.setItem("theme", "light")
    }
});
