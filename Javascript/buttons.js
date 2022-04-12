'use strict';
window.onload = function () {
    let differentColor = document.querySelector(".colorButton");
    let navBar = document.querySelector("#navigation");
    let originalNav = document.querySelector(".originalButton");

    differentColor.addEventListener("click", function(){
        navBar.style.backgroundColor="black";
    })

    originalNav.addEventListener("click", function(){
        navBar.style.backgroundColor="#A87754";
    })
}