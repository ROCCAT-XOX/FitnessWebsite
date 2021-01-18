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
let i = 0;
document.getElementById("hauptzielsubmit").addEventListener("click", neueZieleHinzufügen());

function neueZieleHinzufügen(){

    let divCard = document.getElementById("userZiele");

    let divTabelle = document.createElement("div");
    //divTabelle.setAttribute("id", "Hauptziel" + localStorage.getItem(aktiv))

    let tabelle = document.createElement("table");
    tabelle.setAttribute("id", "tabelle" + i.toString());
    i++;
    
    let tabellenKopf = document.createElement("thead");
    let trKopf = document.createElement("tr");
    let thHauptziel = document.createElement("th");
    thHauptziel.innerHTML = document.getElementById("inputFieldZiel").value;
    
    let thButtonZiel = document.createElement("th");
    let buttonUnterziel = document.createElement("button");
    buttonUnterziel.innerHTML = "Unterziel anlegen";

    let thButtonLöschen = document.createElement("th");
    let löschButtonHauptziel = document.createElement("button");
    löschButtonHauptziel.innerHTML = "Löschen"

    thButtonLöschen.appendChild(löschButtonHauptziel);
    thButtonZiel.appendChild(buttonUnterziel);
    
    trKopf.appendChild(thHauptziel);
    trKopf.appendChild(thButtonZiel);
    trKopf.appendChild(thButtonLöschen);
    tabellenKopf.appendChild(trKopf);
    tabelle.appendChild(tabellenKopf);
    divTabelle.appendChild(tabelle);
    divCard.appendChild(divTabelle);

    buttonUnterziel.onclick=function(){
        let tabellenKörper = document.createElement("tbody");
        let trKörper = document.createElement("tr");
        
        let tdUnterziel = document.createElement("td");
        tdUnterziel.innerHTML = "Unterziel 1";
        let tdUnterzielErledigt = document.createElement("td");
        tdUnterzielErledigt.innerHTML = "Nicht Erledigt";

        let tdButtonLöschen = document.createElement("td");
        let löschButtonUnterziel = document.createElement("button");
        löschButtonUnterziel.innerHTML = "Löschen"
        

        tdButtonLöschen.appendChild(löschButtonUnterziel);
        trKörper.appendChild(tdUnterziel);
        trKörper.appendChild(tdUnterzielErledigt);
        trKörper.appendChild(tdButtonLöschen);
        tabellenKörper.appendChild(trKörper);
        
        document.getElementById(buttonUnterziel.parentNode.parentNode.parentNode.parentNode.id).appendChild(tabellenKörper);  
    }
}