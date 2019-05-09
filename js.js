window.addEventListener("DOMContentLoaded", loadSVG);

function loadSVG() {
  console.log("load SVG");

  fetch("tidslinje-01.svg")
    .then(response => response.text())
    .then(svgData => {
      console.log("SVG er loaded");

      document
        .querySelector("#thesvg")
        .insertAdjacentHTML("afterbegin", svgData);
    });
}
