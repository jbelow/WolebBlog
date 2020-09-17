"use strict";

window.addEventListener("load", function () {
  var btnNav = document.getElementById("btnNav");
  btnNav.addEventListener("click", function () {
    var i = document.getElementById("myTopnav");

    if (i.className === "topnav") {
      i.className += " responsive";
    } else {
      i.className = "topnav";
    }
  });
});