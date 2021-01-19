document.getElementById("btnZielAdd").addEventListener("click", neuenZielAnlegen());

function neuenZielAnlegen(){

let ModalNewZiel = document.getElementById("newZiel");

// Get the button that opens the modal
let btn = document.getElementById("btnZielAdd");

// Get the <span> element that closes the modal
let span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn.onclick = function() {
    ModalNewZiel.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    ModalNewZiel.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == ModalNewZiel) {
    ModalNewZiel.style.display = "none";
  }
}
}