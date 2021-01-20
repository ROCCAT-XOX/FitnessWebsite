//wenn die Seite neu geladen wird, soll die Funktion loadSite() aufgerufen werden
window.onload = function (){
    loadSite()
}

function loadSite(){
    let user = localStorage.getItem("aktiv");
    let angemeldeterUser = JSON.parse(localStorage.getItem(user + "+"));
    try{
        for(let i = 0; i<angemeldeterUser.length; i++){   
            createCardZiele(angemeldeterUser);
        } 
    }
    catch{
        console.log("Der User hat noch keine Ziele angelegt!");
    } 
}

let f = 0;
let d = 0;
function createCardZiele(angemeldeterUser){

    let divCard = document.getElementById("userZiele");

    let divTabelle = document.createElement("div");

    let tabelle = document.createElement("table");
    tabelle.setAttribute("id", "tabelle" + d.toString());
    d++;
 
    let tabellenKopf = document.createElement("thead");
    let trKopf = document.createElement("tr");
    let thHauptziel = document.createElement("th");
    thHauptziel.innerHTML = angemeldeterUser[f].hauptziel;
    f++;
    
    let thButtonZiel = document.createElement("th");
    let buttonUnterziel = document.createElement("button");
    buttonUnterziel.setAttribute("id", "btnUnterzielAdd");
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

    console.log(angemeldeterUser[0].unterziele[0]);
    console.log(angemeldeterUser[0].unterziele[1]);
    for(let i=0; i<angemeldeterUser[f-1].unterziele.length;i++){
        
        let tabellenKörper = document.createElement("tbody");
        let trKörper = document.createElement("tr");
        
        let tdUnterziel = document.createElement("td");
        tdUnterziel.innerHTML = angemeldeterUser[f-1].unterziele[i];

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
            

        document.getElementById("tabelle" + (d-1).toString()).appendChild(tabellenKörper);
    }
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
            let user = localStorage.getItem("aktiv");
            let angemeldeterUser2 = JSON.parse(localStorage.getItem(user + "+"));
            for(let r=0; r<d; r++){
                for(let l=0; l<d;l++){
                    if(document.getElementById(buttonUnterziel.parentNode.parentNode.parentNode.parentNode.id).getElementsByTagName("thead")[0].getElementsByTagName("tr")[0].getElementsByTagName("th")[0].innerHTML == angemeldeterUser2[l].hauptziel){
                        angemeldeterUser2[l].unterziele.push(document.getElementById("inputFieldUnterziel").value);
                        console.log("angemeldeter user" + l + angemeldeterUser2[l].hauptziel);
                        localStorage.setItem(user + "+", JSON.stringify(angemeldeterUser2));
                        return;
                    }
                }     
            }
            return false;
        }
    }
    return false;
}