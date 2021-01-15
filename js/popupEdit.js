document.getElementById("useredit").addEventListener("click", editKunde());

function editKunde(){

let modal1 = document.getElementById("secondModal");

// Get the button that opens the modal
let btnedit = document.getElementById("useredit");

// Get the <span> element that closes the modal
let spanedit = document.getElementsByClassName("closeEdit")[0];

// When the user clicks on the button, open the modal
btnedit.onclick = function() {
  modal1.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
spanedit.onclick = function() {
  modal1.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal1) {
    modal1.style.display = "none";
  }
}

}