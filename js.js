window.addEventListener("DOMContentLoaded", loadSVG);
let modal = document.querySelector("#modal");
let modal3 = document.querySelector("#modal3");
let modal4 = document.querySelector("#modal4");
let modal5 = document.querySelector("#modal5");
let modal6 = document.querySelector("#modal6");
let modal7 = document.querySelector("#modal7");
let modal8 = document.querySelector("#modal8");
let modal9 = document.querySelector("#modal9");
let modal10 = document.querySelector("#modal10");
let modal11 = document.querySelector("#modal11");
let modalinfo = document.querySelector("#modal_info");

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
      klikBoble6();
      klikBoble7();
      klikBoble8();
      klikBoble9();
      klikBoble10();
      klikBoble11();
      klikBobleinfo();
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

function klikBoble6() {
  document.getElementById("boble6").addEventListener("click", visModal6);

  console.log("boble er klikket");
}
function visModal6() {
  modal6.classList.add("vis6");
  modal6.querySelector("button").addEventListener("click", skjulModal6);
}

function skjulModal6() {
  modal6.classList.remove("vis6");
}

function klikBoble7() {
  document.getElementById("boble7").addEventListener("click", visModal7);

  console.log("boble er klikket");
}
function visModal7() {
  modal7.classList.add("vis7");
  modal7.querySelector("button").addEventListener("click", skjulModal7);
}

function skjulModal7() {
  modal7.classList.remove("vis7");
}

function klikBoble8() {
  document.getElementById("boble8").addEventListener("click", visModal8);

  console.log("boble er klikket");
}
function visModal8() {
  modal8.classList.add("vis8");
  modal8.querySelector("button").addEventListener("click", skjulModal8);
}

function skjulModal8() {
  modal8.classList.remove("vis8");
}

function klikBoble9() {
  document.getElementById("boble9").addEventListener("click", visModal9);

  console.log("boble er klikket");
}
function visModal9() {
  modal9.classList.add("vis9");
  modal9.querySelector("button").addEventListener("click", skjulModal9);
}

function skjulModal9() {
  modal9.classList.remove("vis9");
}

function klikBoble10() {
  document.getElementById("boble10").addEventListener("click", visModal10);

  console.log("boble er klikket");
}
function visModal10() {
  modal10.classList.add("vis10");
  modal10.querySelector("button").addEventListener("click", skjulModal10);
}

function skjulModal10() {
  modal10.classList.remove("vis10");
}

function klikBoble11() {
  document.getElementById("boble11").addEventListener("click", visModal11);

  console.log("boble er klikket");
}
function visModal11() {
  modal11.classList.add("vis11");
  modal11.querySelector("button").addEventListener("click", skjulModal11);
}

function skjulModal11() {
  modal11.classList.remove("vis11");
}

function klikBobleinfo() {
  document.getElementById("bobble").addEventListener("click", visModalinfo);

  console.log("boble er klikket");
}
function visModalinfo() {
  modalinfo.classList.add("visinfo");
  modalinfo.querySelector("button").addEventListener("click", skjulModalinfo);
}

function skjulModalinfo() {
  modalinfo.classList.remove("visinfo");
}
function scrollWin() {
  window.scrollBy(0, 900);
}
window.scrollBy({
  behavior: "smooth"
});
