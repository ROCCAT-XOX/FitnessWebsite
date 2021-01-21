//wenn die Seite neu geladen wird, soll die Funktion loadSite() aufgerufen werden
window.onload = function (){
    loadSite()
}

let user = localStorage.getItem("aktiv");
//die Funktion createCardZiele soll so oft aufgerufen werden, wie es Hauptziele im LocalStorage des eingeloggten Users gibt
function loadSite(){  
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

//Hilfsvariabeln, um eineigen Elementen unique id`s zuweisen zu können
let f = 0;
let d = 0;
let g = 0;
let n = 0;

//Erstellt alle nötigen Tabellen, abhängig vom User und wie viel Ziele er hat, mit Haupt-und Unterzielen; des Weiteren bekommen die dabei erstellten Button wieder die Funktion und EventLsitener, die sie benötigen
function createCardZiele(angemeldeterUser){

    //Tabellen werden in dieses div gepackt
    let divCard = document.getElementById("userZiele");

    let divTabelle = document.createElement("div");

    let tabelle = document.createElement("table");
    tabelle.setAttribute("id", "tabelle" + d.toString());
    d++;
    let tabellenKörper = document.createElement("tbody");
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
    löschButtonHauptziel.setAttribute("id", "btnHauptzielDelete"  + g.toString());
    g++;
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

    //in dieser for-schleife werden einem Hauptziel seine Unterziele hinzugefügt und in den Tabellenkörper gepackt, diese muss so oft durchlaufen werden, wie es Unterziele in dem betreffenden Hauptziel gibt
    for(let i=0; i<angemeldeterUser[f-1].unterziele.length;i++){
        
        
        let trKörper = document.createElement("tr");
        
        let tdUnterziel = document.createElement("td");
        tdUnterziel.innerHTML = angemeldeterUser[f-1].unterziele[i];

        let tdUnterzielErledigt = document.createElement("td");
        tdUnterzielErledigt.innerHTML = "Nicht Erledigt";

        let tdButtonLöschen = document.createElement("td");
        let löschButtonUnterziel = document.createElement("button");
        löschButtonUnterziel.setAttribute("id", "btnUnterzieleDelete" + n.toString());
        löschButtonUnterziel.innerHTML = "Löschen";
        n++;    
        
        //hier kann mit dem Lösch Button der Unterziele, die einzelnen Unterziele gelöscht werden; diese Funktion muss nur einmal implementiert werden, da danach die Seite automatisch reloaded
        löschButtonUnterziel.onclick=function(){  
            try{
                let angemeldeterUser4 = JSON.parse(localStorage.getItem(user + "+"));
                let id = this.id;
                console.log(id);
                console.log(document.getElementById(id).parentNode.parentNode.getElementsByTagName("td")[0].innerHTML); //=Unterzielname
                console.log(angemeldeterUser4[i].unterziele[r]);
                //es werden zwei for schleifen benötigt, um durch jedes Hauptziel zu iterieren und in jedem Hauptziel nochmal durch die Unterziele
                for(let i=0;i<angemeldeterUser4.length;i++){
                    for(let r = 0;r<angemeldeterUser4[i].unterziele.length;r++){
                        //sobald ein Unterziel mit dem Unterziel, dass in der Tabelle angeziegt wird, übereinstimmt, wird das Tabellenzeilen Element gelöscht und im localStorage das einzelne Unterziel gelöscht
                        if(angemeldeterUser4[i].unterziele[r] == document.getElementById(id).parentNode.parentNode.getElementsByTagName("td")[0].innerHTML){
                            console.log("Im " + i + ". Objekt, " + r + ". Unterziel");
                            angemeldeterUser4[i].unterziele.splice(r,1);
                            localStorage.setItem(user + "+", JSON.stringify(angemeldeterUser4));
                            document.getElementById(id).parentNode.parentNode.remove();
                        }
                    }
                }
            }
            catch{
                console.log("Element wurde gelöscht");
            }
            
        }

        tdButtonLöschen.appendChild(löschButtonUnterziel);
        trKörper.appendChild(tdUnterziel);
        trKörper.appendChild(tdUnterzielErledigt);
        trKörper.appendChild(tdButtonLöschen);
        tabellenKörper.appendChild(trKörper);
            

        document.getElementById("tabelle" + (d-1).toString()).appendChild(tabellenKörper);
    }
    //Fügt ein neues Unterziel dem entsprechenden Hauptziel hinzu
    buttonUnterziel.onclick=function(){
        
        //Modal zum Hinzufügen eines Unterziels öffnet sich
        let modal = document.getElementById("newUnterziel");
        modal.style.display = "block";

        //Erstellt den Tabellenkörper eines Hauptiziels, sobald der Bestätigen Button des Modals geklickt wird
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

            //Modal wird wieder geschlossen
            let modalNewUnterziel = document.getElementById("newUnterziel");
            modalNewUnterziel.style.display = "none";
            
            let user = localStorage.getItem("aktiv");
            let angemeldeterUser2 = JSON.parse(localStorage.getItem(user + "+"));
            //Zusäzlich wird das Unterziel auch in den localStorage gespeichert; dafür wird der Name des Hauptziels in der Tabelle mit denen im Localstorage verglichen und wenn es übereinstimmt, in das entsprechende Unterziele Array hinzugefügt
            for(let l=0; l<d;l++){
                if(document.getElementById(buttonUnterziel.parentNode.parentNode.parentNode.parentNode.id).getElementsByTagName("thead")[0].getElementsByTagName("tr")[0].getElementsByTagName("th")[0].innerHTML == angemeldeterUser2[l].hauptziel){
                    angemeldeterUser2[l].unterziele.push(document.getElementById("inputFieldUnterziel").value);
                    console.log("angemeldeter user" + l + angemeldeterUser2[l].hauptziel);
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
        let element = document.getElementById("tabelle"+id);
        console.log(element);
        console.log(angemeldeterUser3);
        //Es werden die Hauptziele im localStorage mit dem von dem Button zugehörigen Hauptziel verglichen und wenn sie übereinstimmen aus dem localStorage entfernt
        for(let l=0; l<d;l++){
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


    return false;
}