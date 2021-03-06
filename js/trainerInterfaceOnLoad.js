//Im Grunde hat diese Datei die geiche Aufgabe wie trainerInterface.js, nur dass hier alle Daten/Information/HTM Elemente, etc 
//aus dem LocalStorage auch bei neuladen der Seite angezeigt werden

let emailKey = [];
let arrayToExtractEmailKeys = [];
let user;
let userVorname;
let userNachname;
let userPLZ;
let userOrt;
let userStrasse;
let userHausnummer;
let userEmail;
let userAlter;
let userZiel;
let userBeschreibung;
let userFortschritt;

//wenn die Seite neu geladen wird, soll die Funktion loadSite() aufgerufen werden
window.onload = function (){
    loadSite()
}


function loadSite(){
    
    //Gibt mir alle Keys im LocalStorage, die das Zeichen "@" enthalten
    let archive = [],
        keys = Object.keys(localStorage),
        i = 0, key;

    for (; key = keys[i]; i++) {
        if(key.includes("@") == true && key.includes("+") == false){
            archive.push( key + '=' + localStorage.getItem(key));
        }
        
    }
    console.log(archive);

    for(let i = 0; i<archive.length;i++){
        arrayToExtractEmailKeys = archive[i].split('=');
        emailKey[i] = arrayToExtractEmailKeys[0];
        console.log(emailKey[i]);
    }

    console.log(emailKey);

    //Die Funktion createCardOnLoad() wird nun so oft ausgeführt wie viel Keys mit @ Zeichen, sprich User es gibt 
    for(let i=0; i<archive.length;i++){
        user = JSON.parse(localStorage.getItem(emailKey[i]));
        userVorname = user.Vorname;
        userNachname = user.Nachname;
        userPLZ = user.Postleitzahl;
        userOrt = user.Ort;
        userStrasse = user.Strasse;
        userHausnummer = user.Hausnummer;
        userEmail = user.Email;
        userAlter = user.Geburtsdatum;
        userZiel = user.Ziel;
        userBeschreibung = user.Beschreibung;
        userFortschritt = user.Fortschritt;
        createCardOnLoad();
    }
}

//Funktion, die Cards erstellt, in der die User angezeigt werden; diese ruft eine Reihe von weiteren Funktionen auf, die die Card einzeln zusammenstellt
function createCardOnLoad(){
    let divAußenCard = document.createElement("div");
    divAußenCard.className = "row";
    divAußenCard.setAttribute("id", "divAußenCard" + userEmail);
    /*divAußenCard.onclick=function(){
        localStorage.setItem("aktiv", divAußenCard.id.slice(12));
        window.location ="userInterface.html";
    }*/
    let divCard = document.createElement("div");
    divCard.className = "card";
    
    divCard.appendChild(createNameOnLoad());
    divCard.appendChild(createAdresseOnLoad());
    divCard.appendChild(createEmailOnLoad());
    divCard.appendChild(createAlterOnLoad());
    divCard.appendChild(createZielOnLoad());
    divCard.appendChild(createBeschreibungOnLoad());
    divCard.appendChild(createFortschrittOnLoad());
    divCard.appendChild(createButtonsOnLoad());
    
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
	    "value": userFortschritt
	  }
	
	let ldBar = new window.ldBar("#ldBar_"+idBarId, config);
}

//Der Namens-Teil von der Card wird erstellt
function createNameOnLoad(){
    let divName = document.createElement("div");
    divName.classList.add("name", "column");
    let divVornameNachname = document.createElement("div");
    divVornameNachname.className = "vornameNachname";
    let hName = document.createElement("h2");
    hName.innerHTML= "Name";
    let pVorname = document.createElement("p");
    pVorname.innerHTML = userVorname + " ";
    pVorname.className = "vorname";
    let pNachname = document.createElement("p");
    pNachname.innerHTML = userNachname;
    pNachname.className = "nachname";


    

    divVornameNachname.appendChild(pVorname);
    divVornameNachname.appendChild(pNachname);
    divName.appendChild(hName);
    divName.appendChild(divVornameNachname);

    return divName;
}

//Der Adressen-Teil von der Card wird erstellt
function createAdresseOnLoad(){
    let divAdresse = document.createElement("div");
    divAdresse.classList.add("adresse", "column");
    let divAdresseContent = document.createElement("div");
    divAdresseContent.className = "adresse-content";
    let hAdresse = document.createElement("h2");
    hAdresse.innerHTML= "Adresse";
    let pPLZ = document.createElement("p");
    pPLZ.innerHTML = userPLZ;
    pPLZ.className = "plz";
    let pOrt = document.createElement("p");
    pOrt.innerHTML = userOrt;
    pOrt.className = "ort";
    let pStrasse = document.createElement("p");
    pStrasse.innerHTML = userStrasse + " ";
    pStrasse.className = "strasse";
    let pHausnummer = document.createElement("p");
    pHausnummer.innerHTML = userHausnummer;
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
function createEmailOnLoad(){
    let divEmail = document.createElement("div");
    divEmail.className = "email";
    let hEmail = document.createElement("h2");
    hEmail.innerHTML= "E-Mail";
    let pEmailAdresse = document.createElement("p");
    pEmailAdresse.innerHTML = userEmail;
    pEmailAdresse.className = "Email";

    divEmail.appendChild(hEmail);
    divEmail.appendChild(pEmailAdresse);

    return divEmail;

}

//Der Alter-Teil von der Card wird erstellt
function createAlterOnLoad(){
    let divAlter = document.createElement("div");
    divAlter.className = "alter";
    let hAlter = document.createElement("h2");
    hAlter.innerHTML= "Alter";
    let pAlter = document.createElement("p");
    pAlter.innerHTML = getAlterOnLoad();
    pAlter.className = "Alter";
    
    divAlter.appendChild(hAlter);
    divAlter.appendChild(pAlter);

    return divAlter;
}

//Da nur das Geburtsdatum angegeben wird, aber das Alter angezeigt werden soll, muss zunächst das Alter berechnet werden
function getAlterOnLoad(){
    let today = new Date();
    console.log(userAlter);
    let birthDate = new Date(userAlter);
    let age = today.getFullYear() - birthDate.getFullYear(); 
    let m = today.getMonth() - birthDate.getMonth(); 
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) { 
     age--; 
    } 
    return age;

}

//Der Ziel-Teil von der Card wird erstellt
function createZielOnLoad(){
    let divZiel = document.createElement("div");
    divZiel.className = "ziel";
    let hZiel = document.createElement("h2");
    hZiel.innerHTML= "Ziel";
    let pZiel = document.createElement("p");
    pZiel.innerHTML = userZiel;
    pZiel.className = "ziel";

    divZiel.appendChild(hZiel);
    divZiel.appendChild(pZiel);

    return divZiel;
}

//Der Beschreibungs-Teil von der Card wird erstellt
function createBeschreibungOnLoad(){
    let divBeschreibung = document.createElement("div");
    divBeschreibung.className = "beschreibung";
    let hBeschreibung = document.createElement("h2");
    hBeschreibung.innerHTML= "Beschreibung";
    let pBeschreibung = document.createElement("p");
    pBeschreibung.innerHTML = userBeschreibung;
    pBeschreibung.className = "Beschreibung";

    divBeschreibung.appendChild(hBeschreibung);
    divBeschreibung.appendChild(pBeschreibung);
    
    return divBeschreibung;

}

//Der Fortschritt-Teil von der Card wird erstellt
function createFortschrittOnLoad(){
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


//Erstellt die Button zum Löschen und Bearbeiten eines Users
function createButtonsOnLoad(){
    let divEditSection = document.createElement("div");
    divEditSection.className = "editSection";
    let divEditButtonSection = document.createElement("div");
    divEditButtonSection.className = "editButtonSection";
    let buttonEdit = document.createElement("button");
    buttonEdit.className = "userEdit";
    buttonEdit.setAttribute("id", "useredit" + userEmail);
    let buttonDetails = document.createElement("button");
    buttonDetails.className = "moreInformation";

    //Geht auf die Detailseite des User
    buttonDetails.onclick=function(){

        console.log(buttonEdit.id.slice(8));
        localStorage.setItem("aktiv", buttonEdit.id.slice(8));
        window.location = "userInterfaceForTrainer.html";
    }

    //----------------------------------------------Button zum Bearbeiten-----------------------------------------------//

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
        
    }
    //----------------------------------------------Button zum Löschen-----------------------------------------------//
    let buttonDelete = document.createElement("button");
    buttonDelete.className = "deleteUser";
    buttonDelete.setAttribute("id", "userdelete" + userEmail);

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
        }
    }

    
    let iButtonEdit = document.createElement("i");
    iButtonEdit.className = "fa fa-edit";
    let iButtonDelete = document.createElement("i");
    iButtonDelete.className = "fa fa-trash";
    let iButtonDetails = document.createElement("i");
    iButtonDetails.className = "fa fa-info";

    buttonEdit.appendChild(iButtonEdit);
    buttonDelete.appendChild(iButtonDelete);
    buttonDetails.appendChild(iButtonDetails);
    
    divEditButtonSection.appendChild(buttonEdit);
    divEditButtonSection.appendChild(buttonDelete);
    divEditButtonSection.appendChild(buttonDetails);

    divEditSection.appendChild(divEditButtonSection);

    return divEditSection;
}
