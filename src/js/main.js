"use strict"

import "../css/main.scss";

// Ändra till mörkt eller ljust läge
let themeSwitch = document.getElementById("theme-switch");

themeSwitch.addEventListener('click', () => {
    document.body.classList.toggle("dark", themeSwitch.checked)
});