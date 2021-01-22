//User wird ausgeloggt, wenn er auf Logout drückt, im localstorage wird der wert vvon aktiv auf "" gesetzt
function logout(){
    localStorage.setItem("aktiv", "");
    window.location ="index.html";
}


//Hilfsvariabeln, um Elemeneten unique id's zu geben
let i = 0;
let s = 0;
let r = 0;
let m = 0;

//Fügt ein neues Hauptziel hinzu und erstellt die Tabelle, sobald auf bestätigen bei dem Modal gedrückt wird
function neuesHauptzielHinzufügen(){

     //Modal schließt sich wieder
    let modalNewHauptziel = document.getElementById("newHauptziel");
    modalNewHauptziel.style.display = "none";  

    //Tabellen werden alle in das div gepackt
    let divCard = document.getElementById("userZiele");

    let divTabelle = document.createElement("div");

    let tabelle = document.createElement("table");
    tabelle.setAttribute("id", "table" + i.toString());
    
    i++;
 
    let tabellenKopf = document.createElement("thead");
    let trKopf = document.createElement("tr");
    let thHauptziel = document.createElement("th");
    thHauptziel.className = "targetCursor";
    thHauptziel.innerHTML = document.getElementById("inputFieldHauptziel").value;
    
    //Hauptziel wird in den localStorage des eingeloggten Users gespeichert
    let user = localStorage.getItem("aktiv");
    let angemeldeterUser = JSON.parse(localStorage.getItem(user + "+"));
    console.log(angemeldeterUser);
    //Ziele werden als Objekt im localStorage gespeichert
    let ziele = new Object();
    ziele.hauptziel = document.getElementById("inputFieldHauptziel").value;
    ziele.erledigt = 0;
    ziele.unterziele = [];
    angemeldeterUser.push(ziele);
    console.log(angemeldeterUser);
    console.log(angemeldeterUser[1]);
    localStorage.setItem(user + "+", JSON.stringify(angemeldeterUser));

    let thButtonZiel = document.createElement("th");
    let buttonUnterziel = document.createElement("button");
    buttonUnterziel.className = "TableBtnUndertarget";
    buttonUnterziel.setAttribute("id", "btnUnterzielAdd" + m.toString());
    m++;
    buttonUnterziel.innerHTML = "Unterziel anlegen";

    let thButtonLöschen = document.createElement("th");
    let löschButtonHauptziel = document.createElement("button");
    löschButtonHauptziel.className = "TableBtnDelete";
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
        let id = this.id;
        console.log(id);
        let modal = document.getElementById("newUnterziel");
        
        // When the user clicks anywhere outside of the modal, close it
        window.onclick = function(event) {
            if (event.target == modal) {
                modal.style.display = "none";
            }
        }
        
        //Modal zum Hinzufügen eines Unterziels öffnet sich
        modal.style.display = "block";

        //Erstellt den Tabellenkörper eines Hauptiziels, sobald der Bestätigen Button des Modals geklickt wird
        document.getElementById("unterzielsubmit").onclick=function(){
            let tabellenKörper = document.createElement("tbody");
            let trKörper = document.createElement("tr");
            
            let tdUnterziel = document.createElement("td");
            tdUnterziel.className = "tableRow";
            tdUnterziel.innerHTML = document.getElementById("inputFieldUnterziel").value;
            
            let tdUnterzielErledigt = document.createElement("td");
            tdUnterziel.className = "tableRow";
            tdUnterzielErledigt.innerHTML = "Nicht Erledigt";

            let tdButtonLöschen = document.createElement("td");
            
            let löschButtonUnterziel = document.createElement("button");
            löschButtonUnterziel.className = "TableBtnDelete";
            löschButtonUnterziel.setAttribute("id", "test");
            löschButtonUnterziel.innerHTML = "Löschen";                

            tdButtonLöschen.appendChild(löschButtonUnterziel);
            trKörper.appendChild(tdUnterziel);
            trKörper.appendChild(tdUnterzielErledigt);
            trKörper.appendChild(tdButtonLöschen);
            tabellenKörper.appendChild(trKörper);
            
            console.log(document.getElementById(id).parentNode.parentNode.parentNode.parentNode.id);
            document.getElementById(document.getElementById(id).parentNode.parentNode.parentNode.parentNode.id).appendChild(tabellenKörper);

            //Modal wird wieder geschlossen
            let modalNewUnterziel = document.getElementById("newUnterziel");
            modalNewUnterziel.style.display = "none";
            
            let angemeldeterUser2 = JSON.parse(localStorage.getItem(user + "+"));
           //Zusäzlich wird das Unterziel auch in den localStorage gespeichert; dafür wird der Name des Hauptziels in der Tabelle mit denen im Localstorage verglichen und wenn es übereinstimmt, in das entsprechende Unterziele Array hinzugefügt
            for(let l=0; l<document.getElementsByTagName("table").length;l++){
                if(document.getElementById(document.getElementById(id).parentNode.parentNode.parentNode.parentNode.id).getElementsByTagName("thead")[0].getElementsByTagName("tr")[0].getElementsByTagName("th")[0].innerHTML == angemeldeterUser2[l].hauptziel){
                    let unterziel = new Object();
                    unterziel.name = document.getElementById("inputFieldUnterziel").value;
                    unterziel.erledigt = 0;
                    angemeldeterUser2[l].unterziele.push(unterziel);
                    localStorage.setItem(user + "+", JSON.stringify(angemeldeterUser2));
                    return;
                }
            }     
           
        return false;
        }
    }

    //Sobald dieser Button gedrückt wird, wird ein Hauptziel mit seinen Unterzielen gelöscht
    löschButtonHauptziel.onclick=function(){
        let angemeldeterUser3 = JSON.parse(localStorage.getItem(user + "+"));
        let id = this.id.slice(18);
        //Hier wird die Tabelle zu dem zugehörigen Lösch Button herausgesucht
        let element = document.getElementById("table"+id);
        console.log(element);
        console.log(angemeldeterUser3);
        
        //Es werden die Hauptziele im localStorage mit dem von dem Button zugehörigen Hauptziel verglichen und wenn sie übereinstimmen aus dem localStorage entfernt
        for(let l=0; l<angemeldeterUser3.length;l++){
            if(document.getElementById(löschButtonHauptziel.parentNode.parentNode.parentNode.parentNode.id).getElementsByTagName("thead")[0].getElementsByTagName("tr")[0].getElementsByTagName("th")[0].innerHTML == angemeldeterUser3[l].hauptziel){
                    
                console.log(document.getElementById(löschButtonHauptziel.parentNode.parentNode.parentNode.parentNode.id).getElementsByTagName("thead")[0].getElementsByTagName("tr")[0].getElementsByTagName("th")[0].innerHTML);
                console.log(angemeldeterUser3[l].hauptziel);
                console.log(l);
                angemeldeterUser3.splice(l,1);
                console.log(angemeldeterUser3);
                localStorage.setItem(user + "+", JSON.stringify(angemeldeterUser3));
                //Hier wird das Element Tabelle gelöscht
                element.remove();
                return;
            }
        }     
       
    }
}