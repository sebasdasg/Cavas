"use strick";

/* Preload */
/* la carga finalizará después de cargar el documento */
const preloader = document.querySelector("[data-preload]");

window.addEventListener("load", function () {
  preloader.classList.add("loaded");
  this.document.body.classList.add("loaded");
});
