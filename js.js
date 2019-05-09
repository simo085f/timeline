window.addEventListener("DOMContentLoaded", loadSVG);
let modal = document.querySelector("#modal");
let modal3 = document.querySelector("#modal3");
let modal4 = document.querySelector("#modal4");
let modal5 = document.querySelector("#modal5");

function loadSVG() {
  console.log("load SVG");

  fetch("tidslinje-01.svg")
    .then(response => response.text())
    .then(svgData => {
      console.log("SVG er loaded");

      document
        .querySelector("#thesvg")
        .insertAdjacentHTML("afterbegin", svgData);

      klikBoble();
      klikBoble3();
      klikBoble4();
      klikBoble5();
    });
}

function klikBoble() {
  document.getElementById("boble2").addEventListener("click", visModal);

  console.log("boble er klikket");
}

function visModal() {
  modal.classList.add("vis");
  modal.querySelector("button").addEventListener("click", skjulModal);
}

function skjulModal() {
  modal.classList.remove("vis");
}

function klikBoble3() {
  document.getElementById("boble3").addEventListener("click", visModal3);

  console.log("boble er klikket");
}

function visModal3() {
  modal3.classList.add("vis3");
  modal3.querySelector("button").addEventListener("click", skjulModal3);
}

function skjulModal3() {
  modal3.classList.remove("vis3");
}

function klikBoble4() {
  document.getElementById("boble4").addEventListener("click", visModal4);

  console.log("boble er klikket");
}
function visModal4() {
  modal4.classList.add("vis4");
  modal4.querySelector("button").addEventListener("click", skjulModal4);
}

function skjulModal4() {
  modal4.classList.remove("vis4");
}

function klikBoble5() {
  document.getElementById("boble5").addEventListener("click", visModal5);

  console.log("boble er klikket");
}
function visModal5() {
  modal5.classList.add("vis5");
  modal5.querySelector("button").addEventListener("click", skjulModal5);
}

function skjulModal5() {
  modal5.classList.remove("vis5");
}

function scrollWin() {
  window.scrollBy(0, 900);
}
