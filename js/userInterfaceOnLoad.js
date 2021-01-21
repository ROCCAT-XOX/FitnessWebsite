let idBarId=0;

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
                checkFortschritt();
                
            } 
        }
        catch{
            console.log("Error");
        } 
        createCardFortschrittOnLoad();
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
    if(angemeldeterUser[f-1].erledigt == 0){
        console.log("test")
    }
    else{
        
        tabelle.classList.toggle('markiert');
    }

    thHauptziel.addEventListener("click", function(){
        console.log(thHauptziel.parentNode.parentNode.parentNode.id);
        let key = thHauptziel.parentNode.parentNode.parentNode.id.slice(7);
        console.log(key);
        if(angemeldeterUser[key].erledigt == 0){
            angemeldeterUser[key].erledigt = 1;
            localStorage.setItem(user + "+",JSON.stringify(angemeldeterUser))
            tabelle.classList.toggle('markiert');
        }
        else{ 
            angemeldeterUser[key].erledigt = 0;
            localStorage.setItem(user + "+",JSON.stringify(angemeldeterUser))
            tabelle.classList.toggle('markiert');
        }
    })
    
    
    let thButtonZiel = document.createElement("th");
    let buttonUnterziel = document.createElement("button");
    buttonUnterziel.setAttribute("id", "btnUnterzielAdd");
    buttonUnterziel.className = "TableBtnUndertarget";
    buttonUnterziel.innerHTML = "Unterziel anlegen";

    let thButtonLöschen = document.createElement("th");
    let löschButtonHauptziel = document.createElement("button");
    löschButtonHauptziel.className = "TableBtnDelete";
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
        
        tdUnterziel.innerHTML = angemeldeterUser[f-1].unterziele[i].name;


        let tdUnterzielErledigt = document.createElement("td");
       

        if(angemeldeterUser[f-1].unterziele[i].erledigt == 0){
            tdUnterzielErledigt.innerHTML = "Nicht Erledigt"; //hier überprüfen ob erledigt 0 oder 1 und je nachdem das anzeigen
        }
        else{
            tdUnterzielErledigt.innerHTML = "Erledigt";
        }
    
        //Je nachdem, ob das Ziel erledigt ist oder nicht, muss er korrekt in die Tabelle geladen werden
        
        tdUnterzielErledigt.addEventListener("click", function(){
            
            let key2 = tdUnterzielErledigt.parentNode.parentNode.parentNode.id.slice(7);
            console.log(key2);

            //in LocalStorage speichern, ob Unterziel erledigt ist oder nicht; 0=nicht erledigt, 1=erledigt
            if(angemeldeterUser[key2].unterziele[i].erledigt == 0){
                angemeldeterUser[key2].unterziele[i].erledigt = 1;
                localStorage.setItem(user + "+",JSON.stringify(angemeldeterUser))
                console.log("test");
            }
            else{ 
                angemeldeterUser[key2].unterziele[i].erledigt = 0;
                localStorage.setItem(user + "+",JSON.stringify(angemeldeterUser))
                console.log("test");
            }

            //in der Tabelle anzeigen, ob erledigt ist oder nicht
            if(angemeldeterUser[key2].unterziele[i].erledigt == 0){
                tdUnterzielErledigt.innerHTML = "Nicht Erledigt"; //hier überprüfen ob erledigt 0 oder 1 und je nachdem das anzeigen
                console.log("test")
            }
            else{
                tdUnterzielErledigt.innerHTML = "Erledigt";
                console.log("test")
            }
        })
        

        let tdButtonLöschen = document.createElement("td");
        let löschButtonUnterziel = document.createElement("button");
        löschButtonUnterziel.className = "TableBtnDelete";
        löschButtonUnterziel.setAttribute("id", "btnUnterzieleDelete" + n.toString());
        löschButtonUnterziel.innerHTML = "Löschen";
        n++;    
        
        //hier kann mit dem Lösch Button der Unterziele, die einzelnen Unterziele gelöscht werden; diese Funktion muss nur einmal implementiert werden, da danach die Seite automatisch reloaded
        löschButtonUnterziel.onclick=function(){  
           
                let angemeldeterUser4 = JSON.parse(localStorage.getItem(user + "+"));
                let id = this.id;
                console.log(id);
                console.log(document.getElementById(id).parentNode.parentNode.getElementsByTagName("td")[0].innerHTML); //=Unterzielname
                //es werden zwei for schleifen benötigt, um durch jedes Hauptziel zu iterieren und in jedem Hauptziel nochmal durch die Unterziele
                for(let i=0;i<angemeldeterUser4.length;i++){
                    for(let r = 0;r<angemeldeterUser4[i].unterziele.length;r++){
                        //sobald ein Unterziel mit dem Unterziel, dass in der Tabelle angeziegt wird, übereinstimmt, wird das Tabellenzeilen Element gelöscht und im localStorage das einzelne Unterziel gelöscht
                        if(angemeldeterUser4[i].unterziele[r].name == document.getElementById(id).parentNode.parentNode.getElementsByTagName("td")[0].innerHTML){
                            console.log("Im " + i + ". Objekt, " + r + ". Unterziel");
                            angemeldeterUser4[i].unterziele.splice(r,1);
                            localStorage.setItem(user + "+", JSON.stringify(angemeldeterUser4));
                            document.getElementById(id).parentNode.parentNode.remove();
                            return;
                        }
                    }
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
            löschButtonUnterziel.className = "TableBtnDelete";
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
                    
                    let unterziel = new Object();
                    unterziel.name = document.getElementById("inputFieldUnterziel").value;
                    unterziel.erledigt = 0;
                    angemeldeterUser2[l].unterziele.push(unterziel);
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
    return false;
}

let fortschrittRounded;
function checkFortschritt(){
    let angemeldeterUser5 = JSON.parse(localStorage.getItem(user + "+"));
    let anzahlZiele = angemeldeterUser5.length; //das sind bereits die anzah der hauptziele
    
    for(let i = 0; i<angemeldeterUser5.length; i++){
        anzahlZiele += angemeldeterUser5[i].unterziele.length;
    }
    console.log(anzahlZiele);
    
    let anzahlErledigteZiele = 0;
    for(let i = 0;i<angemeldeterUser5.length;i++){
        if(angemeldeterUser5[i].erledigt == 1){
            anzahlErledigteZiele++;
        }
        for(let r = 0; r<angemeldeterUser5[i].unterziele.length; r++){
            if(angemeldeterUser5[i].unterziele[r].erledigt == 1){
                anzahlErledigteZiele++;
            }
        }
    }
    

    let fortschritt = (anzahlErledigteZiele/anzahlZiele) * 100;
    fortschrittRounded = fortschritt.toFixed(2);
    
    
    let kunde = JSON.parse(localStorage.getItem(user));
  
    kunde.Fortschritt = fortschrittRounded;
    localStorage.setItem(user, JSON.stringify(kunde));
}

function createCardFortschrittOnLoad(){
    ++idBarId;
    let divFortschritt = document.getElementById("progressbar");
    let divLB = document.createElement("div");
    divLB.id = "ldBar_"+idBarId;
    divLB.className = "ldBar";
    divLB.className =   "label-center";
    divLB.style.width = "100%";
    divLB.style.height = "50%";
    divFortschritt.appendChild(divLB);
    renderIdBar();
}


//die loadbar bekommt die entsprechenden Parameter gesetzt
function renderIdBar(){
	let config={
	    "stroke": '#f00',
	    "stroke-width": 10,
        "preset": "circle",
        "data-transition-in":"100",
	    "value": fortschrittRounded //kunde.Fortschritt
	  }
	
	let ldBar = new window.ldBar("#ldBar_"+idBarId, config);
}

