//Modal zum hinzufügen eines Hauptziels
document.getElementById("btnZielAdd").addEventListener("click", ModalneuesHauptzielHinzufügen());

function ModalneuesHauptzielHinzufügen(){
    
    let modalNewHauptziel = document.getElementById("newHauptziel");

    // Get the button that opens the modal
    let btn = document.getElementById("btnZielAdd");

    // Get the <span> element that closes the modal
    let span = document.getElementsByClassName("close")[0];

    // When the user clicks on the button, open the modal
    btn.onclick = function() {
        modalNewHauptziel.style.display = "block";
    }

    // When the user clicks on <span> (x), close the modal
    span.onclick = function() {
        modalNewHauptziel.style.display = "none";
    }

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function(event) {
        if (event.target == modalNewHauptziel) {
            modalNewHauptziel.style.display = "none";
        }
    }
}

document.getElementById("btnUnterzielAdd").addEventListener("click", ModalneuesUnterzielHinzufügen());

function ModalneuesUnterzielHinzufügen(){
    
    let modalNewUnterziel = document.getElementById("newUnterziel");

    // Get the button that opens the modal
    let btn = document.getElementById("btnUnterzielAdd");

    // Get the <span> element that closes the modal
    let span = document.getElementsByClassName("closeUnterziel")[0];

    // When the user clicks on the button, open the modal
    btn.onclick = function() {
        modalNewUnterziel.style.display = "block";
    }

    // When the user clicks on <span> (x), close the modal
    span.onclick = function() {
        modalNewUnterziel.style.display = "none";
    }

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function(event) {
        if (event.target == modalNewUnterziel) {
            modalNewUnterziel.style.display = "none";
        }
    }
}