function logout(){
    localStorage.setItem("aktiv", "");
    window.location ="index.html";
}


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
let s = 0;
let r = 0;

//Fügt ein neues Hauptziel hinzu und erstellt die Tabelle
function neuesHauptzielHinzufügen(){

    let modalNewHauptziel = document.getElementById("newHauptziel");
    modalNewHauptziel.style.display = "none";

    let divCard = document.getElementById("userZiele");

    let divTabelle = document.createElement("div");

    let tabelle = document.createElement("table");
    tabelle.setAttribute("id", "tabelle" + i.toString());
    i++;
 
    
    let tabellenKopf = document.createElement("thead");
    let trKopf = document.createElement("tr");
    let thHauptziel = document.createElement("th");
    thHauptziel.innerHTML = document.getElementById("inputFieldHauptziel").value;
    
    //Hauptziel wird in den localStorage des eingeloggten Users gespeichert
    let user = localStorage.getItem("aktiv");
    let angemeldeterUser = JSON.parse(localStorage.getItem(user + "+"));
    console.log(angemeldeterUser);
    let ziele = new Object();
    ziele.hauptziel = document.getElementById("inputFieldHauptziel").value;
    ziele.unterziele = [];
    angemeldeterUser.push(ziele);
    console.log(angemeldeterUser);
    console.log(angemeldeterUser[1]);
    localStorage.setItem(user + "+", JSON.stringify(angemeldeterUser));
    
    let thButtonZiel = document.createElement("th");
    let buttonUnterziel = document.createElement("button");
    buttonUnterziel.setAttribute("id", "btnUnterzielAdd");
    buttonUnterziel.innerHTML = "Unterziel anlegen";

    let thButtonLöschen = document.createElement("th");
    let löschButtonHauptziel = document.createElement("button");
    löschButtonHauptziel.setAttribute("id", "btnHauptzielDelete" + s.toString());
    s++;
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

    //Fügt ein neues Unterziel dem entsprechenden Hauptziel hinzu
    buttonUnterziel.onclick=function(){
        
        let modal = document.getElementById("newUnterziel");
        modal.style.display = "block";

        document.getElementById("unterzielsubmit").onclick=function(){
            let tabellenKörper = document.createElement("tbody");
            let trKörper = document.createElement("tr");
        
            let tdUnterziel = document.createElement("td");
            tdUnterziel.innerHTML = document.getElementById("inputFieldUnterziel").value;
            
            

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
            
            console.log(document.getElementById("btnUnterzielAdd").parentNode.parentNode.parentNode.parentNode.id);
            document.getElementById(buttonUnterziel.parentNode.parentNode.parentNode.parentNode.id).appendChild(tabellenKörper);

            
            let modalNewUnterziel = document.getElementById("newUnterziel");
            modalNewUnterziel.style.display = "none";
            
            let angemeldeterUser2 = JSON.parse(localStorage.getItem(user + "+"));
            for(let r=0; r<i; r++){
                for(let l=0; l<i;l++){
                    if(document.getElementById(buttonUnterziel.parentNode.parentNode.parentNode.parentNode.id).getElementsByTagName("thead")[0].getElementsByTagName("tr")[0].getElementsByTagName("th")[0].innerHTML == angemeldeterUser2[l].hauptziel){
                        angemeldeterUser2[l].unterziele.push(document.getElementById("inputFieldUnterziel").value);
                        localStorage.setItem(user + "+", JSON.stringify(angemeldeterUser2));
                        return;
                    }
                }     
            }
            return false;
        }
    }

    löschButtonHauptziel.onclick=function(){
        let angemeldeterUser3 = JSON.parse(localStorage.getItem(user + "+"));
        let id = this.id.slice(18);
        let element = document.getElementById("tabelle"+id);
        console.log(element);
        console.log(angemeldeterUser3);
        for(let r=0; r<i; r++){
            for(let l=0; l<i;l++){
                if(document.getElementById(löschButtonHauptziel.parentNode.parentNode.parentNode.parentNode.id).getElementsByTagName("thead")[0].getElementsByTagName("tr")[0].getElementsByTagName("th")[0].innerHTML == angemeldeterUser3[l].hauptziel){
                    
                    console.log(document.getElementById(löschButtonHauptziel.parentNode.parentNode.parentNode.parentNode.id).getElementsByTagName("thead")[0].getElementsByTagName("tr")[0].getElementsByTagName("th")[0].innerHTML);
                    console.log(angemeldeterUser3[l].hauptziel);
                    console.log(l);
                    angemeldeterUser3.splice(l,1);
                    console.log(angemeldeterUser3);
                    localStorage.setItem(user + "+", JSON.stringify(angemeldeterUser3));
                    element.remove();
                    return;
                }
            }     
        }
    }
    return false;
}