//A unique id for each id
let idBarId=0;

let userZiele = [];


//Der Bestätigen Button des Modals; es wird überprüft ob das Email-Feld ausgefüllt ist und wenn ja wird die Funktion addNewKunde() aufgerufen
document.getElementById("submit").addEventListener("click", required);

function required(){
    let x = document.forms["firstModal"]["email"].value;
    if ( x == "" || x == null){
        alert("Du hast keine E-Mail angegeben")
        return false;
    }
    else(
        addNewKunde()
    )
}


//Es wird ein Objekt Kunde erstellt, dessen Werte der Attribute aus den Eigabefeldern des Modals übernommen wird
function addNewKunde(){

    let kunde = {
        Vorname: document.getElementById("fname").value,
        Nachname: document.getElementById("lname").value,
        Geburtsdatum: document.getElementById("date").value,
        Postleitzahl: document.getElementById("PLZ").value,
        Ort: document.getElementById("Ort").value,
        Strasse: document.getElementById("Straße").value,
        Hausnummer: document.getElementById("Hausnummer").value,
        Email: document.getElementById("KundeEmail").value,
        Telefonnummer: document.getElementById("KundeInputPhonenumber").value,
        Passwort: document.getElementById("password").value,
        Beschreibung: document.getElementById("beschreibung").value,
        Ziel: document.getElementById("ziele").value,
        Fortschritt: "0"
    }

    loadIntoStorage(kunde);
    
    createCard();

    //Modal schließt sich nach Drücken des Bestätigen-Buttons wieder
    let modal = document.getElementById("newKunde");
    modal.style.display = "none";
    return false;
}

//Der Kunde wird als JSON String im LocalStorage gespeichert mit der Email als Key
function loadIntoStorage(kunde){ 
    localStorage.setItem(kunde.Email, JSON.stringify(kunde));

    //Wird gleichzeitig ein Platz für die Ziele reserviert
    localStorage.setItem(kunde.Email+"+", JSON.stringify(userZiele));
}


//Funktion, die Cards erstellt, in der die User angezeigt werden; diese ruft eine Reihe von weiteren Funktionen auf, die die Card einzeln zusammenstellt
function createCard(){
	
    let divAußenCard = document.createElement("div");
    divAußenCard.className = "row";
    divAußenCard.setAttribute("id", "divAußenCard" + document.getElementById("KundeEmail").value);
    
    let divCard = document.createElement("div");
    divCard.className = "card";
    
    divCard.appendChild(createName());
    divCard.appendChild(createAdresse());
    divCard.appendChild(createEmail());
    divCard.appendChild(createAlter());
    divCard.appendChild(createZiel());
    divCard.appendChild(createBeschreibung());
    divCard.appendChild(createFortschritt());
    divCard.appendChild(createButtons());
    
    divAußenCard.appendChild(divCard);
    document.body.appendChild(divAußenCard);

    renderIdBar();
    
}

//die loadbar bekommt die entsprechenden Parameter gesetzt
function renderIdBar(){
	let config={
	    "stroke": '#f00',
	    "stroke-width": 10,
        "preset": "energy",
        "data-transition-in":"100",
	    "value": kunde.Fortschritt //kunde.Fortschritt
	  }
	
	let ldBar = new window.ldBar("#ldBar_"+idBarId, config);
}

//Der Namens-Teil von der Card wird erstellt
function createName(){
    let divName = document.createElement("div");
    divName.classList.add("name", "column");
    let divVornameNachname = document.createElement("div");
    divVornameNachname.className = "vornameNachname";
    let hName = document.createElement("h2");
    hName.innerHTML= "Name";
    let pVorname = document.createElement("p");
    pVorname.innerHTML = document.getElementById("fname").value + " ";
    pVorname.className = "vorname";
    let pNachname = document.createElement("p");
    pNachname.innerHTML = document.getElementById("lname").value;
    pNachname.className = "nachname";


    

    divVornameNachname.appendChild(pVorname);
    divVornameNachname.appendChild(pNachname);
    divName.appendChild(hName);
    divName.appendChild(divVornameNachname);

    return divName;
}
//Der Adressen-Teil von der Card wird erstellt
function createAdresse(){
    let divAdresse = document.createElement("div");
    divAdresse.classList.add("adresse", "column");
    let divAdresseContent = document.createElement("div");
    divAdresseContent.className = "adresse-content";
    let hAdresse = document.createElement("h2");
    hAdresse.innerHTML= "Adresse";
    let pPLZ = document.createElement("p");
    pPLZ.innerHTML = document.getElementById("PLZ").value;
    pPLZ.className = "plz";
    let pOrt = document.createElement("p");
    pOrt.innerHTML = document.getElementById("Ort").value;
    pOrt.className = "ort";
    let pStrasse = document.createElement("p");
    pStrasse.innerHTML = document.getElementById("Straße").value + " ";
    pStrasse.className = "strasse";
    let pHausnummer = document.createElement("p");
    pHausnummer.innerHTML = document.getElementById("Hausnummer").value;
    pHausnummer.className = "hausnummer";

    divAdresseContent.appendChild(pPLZ);
    divAdresseContent.appendChild(pOrt);
    divAdresseContent.appendChild(pStrasse);
    divAdresseContent.appendChild(pHausnummer);

    divAdresse.appendChild(hAdresse);
    divAdresse.appendChild(divAdresseContent);

    return divAdresse;

}

//Der Email-Teil von der Card wird erstellt
function createEmail(){
    let divEmail = document.createElement("div");
    divEmail.className = "email";
    let hEmail = document.createElement("h2");
    hEmail.innerHTML= "E-Mail";
    let pEmailAdresse = document.createElement("p");
    pEmailAdresse.innerHTML = document.getElementById("KundeEmail").value;
    pEmailAdresse.className = "Email";
    
    
    divEmail.appendChild(hEmail);
    divEmail.appendChild(pEmailAdresse);

    return divEmail;

}

//Der Alter-Teil von der Card wird erstellt
function createAlter(){
    let divAlter = document.createElement("div");
    divAlter.className = "alter";
    let hAlter = document.createElement("h2");
    hAlter.innerHTML= "Alter";
    let pAlter = document.createElement("p");
    pAlter.innerHTML = getAlter();
    pAlter.className = "Alter";
    divAlter.appendChild(hAlter);
    divAlter.appendChild(pAlter);

    return divAlter;
}

//Da nur das Geburtsdatum angegeben wird, aber das Alter angezeigt werden soll, muss zunächst das Alter berechnet werden
function getAlter(){
    let today = new Date(); 
    let birthDate = new Date(document.getElementById("date").value); 
    let age = today.getFullYear() - birthDate.getFullYear();  
    let m = today.getMonth() - birthDate.getMonth(); 
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) { 
     age--; 
    } 
    return age;

}

//Der Ziel-Teil von der Card wird erstellt
function createZiel(){
    let divZiel = document.createElement("div");
    divZiel.className = "ziel";
    let hZiel = document.createElement("h2");
    hZiel.innerHTML= "Ziel";
    let pZiel = document.createElement("p");
    pZiel.innerHTML = document.getElementById("ziele").value;
    pZiel.className = "ziel";

    divZiel.appendChild(hZiel);
    divZiel.appendChild(pZiel);

    return divZiel;
}

//Der Beschreibungs-Teil von der Card wird erstellt
function createBeschreibung(){
    let divBeschreibung = document.createElement("div");
    divBeschreibung.className = "beschreibung";
    let hBeschreibung = document.createElement("h2");
    hBeschreibung.innerHTML= "Beschreibung";
    let pBeschreibung = document.createElement("p");
    pBeschreibung.innerHTML = document.getElementById("beschreibung").value;
    pBeschreibung.className = "Beschreibung";

    divBeschreibung.appendChild(hBeschreibung);
    divBeschreibung.appendChild(pBeschreibung);
    
    return divBeschreibung;

}

//Der Fortschritt-Teil von der Card wird erstellt
function createFortschritt(){
	++idBarId;
    let divFortschritt = document.createElement("div");
    divFortschritt.className = "fortschritt";
    let divLB = document.createElement("div");
    divLB.id = "ldBar_"+idBarId;
    divLB.className = "ldBar";
    divLB.className =   "label-center";
    divLB.style.width = "100%";
    divLB.style.height = "50%";
    let hFortschritt = document.createElement("h2");
    hFortschritt.innerHTML= "Fortschritt";
    divFortschritt.appendChild(hFortschritt);
    divFortschritt.appendChild(divLB);

    return divFortschritt;
}

//Die Buttons in der Card werden erstellt
function createButtons(){
    let divEditSection = document.createElement("div");
    divEditSection.className = "editSection";
    let divEditButtonSection = document.createElement("div");
    divEditButtonSection.className = "editButtonSection";
    let buttonEdit = document.createElement("button");
    buttonEdit.className = "userEdit";

    buttonEdit.onclick=function(){

        
        //Modal öffnen zum editieren eines Users
        let modal = document.getElementById("secondModal");
        modal.style.display = "block";

        //die Wert aus dem localStorage zum fülen des Modals holen
        let btn = document.getElementById("EditSubmit");
        let key = buttonEdit.id.slice(8);
        let user = JSON.parse(localStorage.getItem(key));

        
        //Modal mit entsprechenden Daten füllen
        document.getElementById("firstname").value = user.Vorname;
        document.getElementById("lastname").value = user.Nachname;
        console.log(key);
        console.log(user.Email);
        document.getElementById("inputPhonenumber").value = user.Telefonnummer;
        document.getElementById("bdate").value = user.Geburtsdatum;
        document.getElementById("EditPLZ").value = user.Postleitzahl;
        document.getElementById("EditOrt").value = user.Ort;
        document.getElementById("EditStraße").value = user.Strasse;
        document.getElementById("EditHausnummer").value = parseInt(user.Hausnummer);
        document.getElementById("EditPassword").value = user.Passwort;
        document.getElementById("EditEmail").value = user.Email;
        document.getElementById("EditZiele").value = user.Ziel;
        document.getElementById("EditBeschreibung").value = user.Beschreibung;
        
        //Neue Daten in localStorage überschreiben, beim Drücken des Bestätigen Buttons
        console.log(key);
        btn.onclick = function(){

            
            if(document.getElementById("EditEmail").value != "")
            {
                localStorage.setItem(key, JSON.stringify({
                    Vorname: document.getElementById("firstname").value,
                    Nachname: document.getElementById("lastname").value,
                    Email: key,
                    Postleitzahl: document.getElementById("EditPLZ").value,
                    Ort: document.getElementById("EditOrt").value,
                    Strasse: document.getElementById("EditStraße").value,
                    Hausnummer: document.getElementById("EditHausnummer").value,
                    Telefonnummer: document.getElementById("inputPhonenumber").value,
                    Geburtsdatum: document.getElementById("bdate").value,
                    Beschreibung: document.getElementById("EditBeschreibung").value,
                    Ziel: document.getElementById("EditZiele").value,
                    Passwort: document.getElementById("EditPassword").value
                    }));
            }

            
        }
    //----------------------------------------------Button zum Löschen-----------------------------------------------//
    let buttonDelete = document.createElement("button");
    buttonDelete.className = "deleteUser";
    buttonDelete.setAttribute("id", "userdelete" + document.getElementById("KundeEmail").value);
    
    buttonDelete.onclick=function(){

        let bestätigungsfeld = confirm("Sind Sie sicher, dass Sie den Kunden löschen wollen?")

        //x enthält die ID der Card
        //element ist schließlich die Card und wird gelöscht
        //es wird anhand der ID der Key zusammengeschnitten, um den betreffenden User auch komplett aus dem LocalStorage zu entfernen
        
        if(bestätigungsfeld == true){
            let x = buttonDelete.parentNode.parentNode.parentNode.parentNode.id;
            let element = document.getElementById(x);
            console.log(x);
            element.remove();
            let key = x.slice(12);
            console.log(key);
            localStorage.removeItem(key);
            localStorage.removeItem(key + "+");
        }
    }


    let iButtonEdit = document.createElement("i");
    iButtonEdit.className = "fa fa-edit";
    let iButtonDelete = document.createElement("i");
    iButtonDelete.className = "fa fa-trash";

    buttonEdit.appendChild(iButtonEdit);
    buttonDelete.appendChild(iButtonDelete);

    divEditButtonSection.appendChild(buttonEdit);
    divEditButtonSection.appendChild(buttonDelete);

    divEditSection.appendChild(divEditButtonSection);

    return divEditSection;
    }
}