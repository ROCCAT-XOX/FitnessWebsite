//A unique id for each id
let idBarId=0;

function addNewKunde(){

    let kunde = {
        Vorname: document.getElementById("fname").value,
        Nachname: document.getElementById("lname").value,
        Geburtsdatum: document.getElementById("date").value,
        Geschlecht: getGeschlecht(),
        Postleitzahl: document.getElementById("PLZ").value,
        Ort: document.getElementById("Ort").value,
        Strasse: document.getElementById("Straße").value,
        Hausnummer: document.getElementById("Hausnummer").value,
        Email: document.getElementById("KundeEmail").value,
        Telefonnummer: document.getElementById("KundeInputPhonenumber").value,
        Passwort: document.getElementById("password").value,
        Beschreibung: document.getElementById("beschreibung").value,
        Ziel: document.getElementById("ziele").value,
        Fortschritt: "50"
    }
    


    loadIntoStorage(kunde);
    
    createCard();

    let modal = document.getElementById("newKunde");
    modal.style.display = "none";
    return false;
}

function loadIntoStorage(kunde){ 
    localStorage.setItem(kunde.Email, JSON.stringify(kunde));
}

function getGeschlecht(){
    if(document.getElementById("männlich").checked == true){
        return document.getElementById("männlich").value;
    }
    else if(document.getElementById("weiblich").checked == true){
        return document.getElementById("weiblich").value;
    }
    else if(document.getElementById("divers").checked == true){
        return document.getElementById("divers").value;
    }
    else{
        return;
    }
}

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
    //after appending to dom render idbar
    renderIdBar();
    
}



function addNewKunde(){

    let kunde = {
        Vorname: document.getElementById("fname").value,
        Nachname: document.getElementById("lname").value,
        Geburtsdatum: document.getElementById("date").value,
        //Geschlecht: getGeschlecht(),
        Postleitzahl: document.getElementById("PLZ").value,
        Ort: document.getElementById("Ort").value,
        Strasse: document.getElementById("Straße").value,
        Hausnummer: document.getElementById("Hausnummer").value,
        Email: document.getElementById("KundeEmail").value,
        Telefonnummer: document.getElementById("KundeInputPhonenumber").value,
        Passwort: document.getElementById("password").value,
        Beschreibung: document.getElementById("beschreibung").value,
        Ziel: document.getElementById("ziele").value,
        Fortschritt: "50"
    }
    


    loadIntoStorage(kunde);
    
    createCard();

    let modal = document.getElementById("newKunde");
    modal.style.display = "none";
    return false;
}

function loadIntoStorage(kunde){ 
    localStorage.setItem(kunde.Email, JSON.stringify(kunde));
}

/*function getGeschlecht(){
    if(document.getElementById("männlich").checked == true){
        return document.getElementById("männlich").value;
    }
    else if(document.getElementById("weiblich").checked == true){
        return document.getElementById("weiblich").value;
    }
    else if(document.getElementById("divers").checked == true){
        return document.getElementById("divers").value;
    }
    else{
        return;
    }
}*/

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
    //after appending to dom render idbar
    renderIdBar();
    
}

function renderIdBar(){
	let config={
	    "stroke": '#f00',
	    "stroke-width": 10,
        "preset": "energy",
        "data-transition-in":"100",
	    "value": "50" //kunde.Fortschritt
	  }
	
	let ldBar = new window.ldBar("#ldBar_"+idBarId, config);
}

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



function createButtons(){
    let divEditSection = document.createElement("div");
    divEditSection.className = "editSection";
    let divEditButtonSection = document.createElement("div");
    divEditButtonSection.className = "editButtonSection";
    let buttonEdit = document.createElement("button");
    buttonEdit.className = "userEdit";
    let buttonDelete = document.createElement("button");
    buttonDelete.className = "deleteUser";
    buttonDelete.setAttribute("id", "userdelete" + document.getElementById("KundeEmail").value);

    buttonDelete.onclick=function(){


        let x = buttonDelete.parentNode.parentNode.parentNode.parentNode.id;
        let element = document.getElementById(x);
        console.log(x);
        element.remove();
        let key = x.slice(12);
        console.log(key);
        localStorage.removeItem(key);
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
      
	

function createName(){
    let divName = document.createElement("div");
    divName.classList.add("name", "column");
    let divVornameNachname = document.createElement("div");
    divVornameNachname.className = "vornameNachname";
    let hName = document.createElement("h2");
    hName.innerHTML= "Name";
    let pVorname = document.createElement("p");
    pVorname.innerHTML = document.getElementById("fname").value + " ";
    let pNachname = document.createElement("p");
    pNachname.innerHTML = document.getElementById("lname").value;


    

    divVornameNachname.appendChild(pVorname);
    divVornameNachname.appendChild(pNachname);
    divName.appendChild(hName);
    divName.appendChild(divVornameNachname);

    return divName;
}

function createAdresse(){
    let divAdresse = document.createElement("div");
    divAdresse.classList.add("adresse", "column");
    let divAdresseContent = document.createElement("div");
    divAdresseContent.className = "adresse-content";
    let hAdresse = document.createElement("h2");
    hAdresse.innerHTML= "Adresse";
    let pPLZ = document.createElement("p");
    pPLZ.innerHTML = document.getElementById("PLZ").value;
    let pOrt = document.createElement("p");
    pOrt.innerHTML = document.getElementById("Ort").value;
    let pStrasse = document.createElement("p");
    pStrasse.innerHTML = document.getElementById("Straße").value + " ";
    let pHausnummer = document.createElement("p");
    pHausnummer.innerHTML = document.getElementById("Hausnummer").value;

    divAdresseContent.appendChild(pPLZ);
    divAdresseContent.appendChild(pOrt);
    divAdresseContent.appendChild(pStrasse);
    divAdresseContent.appendChild(pHausnummer);

    divAdresse.appendChild(hAdresse);
    divAdresse.appendChild(divAdresseContent);

    return divAdresse;

}

function createEmail(){
    let divEmail = document.createElement("div");
    divEmail.className = "email";
    let hEmail = document.createElement("h2");
    hEmail.innerHTML= "E-Mail";
    let pEmailAdresse = document.createElement("p");
    pEmailAdresse.innerHTML = document.getElementById("KundeEmail").value;
    
    
    divEmail.appendChild(hEmail);
    divEmail.appendChild(pEmailAdresse);

    return divEmail;

}

function createAlter(){
    let divAlter = document.createElement("div");
    divAlter.className = "alter";
    let hAlter = document.createElement("h2");
    hAlter.innerHTML= "Alter";
    let pAlter = document.createElement("p");
    pAlter.innerHTML = getAlter();
    divAlter.appendChild(hAlter);
    divAlter.appendChild(pAlter);

    return divAlter;
}

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

function createZiel(){
    let divZiel = document.createElement("div");
    divZiel.className = "ziel";
    let hZiel = document.createElement("h2");
    hZiel.innerHTML= "Ziel";
    let pZiel = document.createElement("p");
    pZiel.innerHTML = document.getElementById("ziele").value;

    divZiel.appendChild(hZiel);
    divZiel.appendChild(pZiel);

    return divZiel;
}

function createBeschreibung(){
    let divBeschreibung = document.createElement("div");
    divBeschreibung.className = "beschreibung";
    let hBeschreibung = document.createElement("h2");
    hBeschreibung.innerHTML= "Beschreibung";
    let pBeschreibung = document.createElement("p");
    pBeschreibung.innerHTML = document.getElementById("beschreibung").value;;

    divBeschreibung.appendChild(hBeschreibung);
    divBeschreibung.appendChild(pBeschreibung);
    
    return divBeschreibung;

}
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



function createButtons(){
    let divEditSection = document.createElement("div");
    divEditSection.className = "editSection";
    let divEditButtonSection = document.createElement("div");
    divEditButtonSection.className = "editButtonSection";
    let buttonEdit = document.createElement("button");
    buttonEdit.className = "userEdit";
    let buttonDelete = document.createElement("button");
    buttonDelete.className = "deleteUser";
    buttonDelete.setAttribute("id", "userdelete" + document.getElementById("KundeEmail").value);

    buttonDelete.onclick=function(){


        let x = buttonDelete.parentNode.parentNode.parentNode.parentNode.id;
        let element = document.getElementById(x);
        console.log(x);
        element.remove();
        let key = x.slice(12);
        console.log(key);
        localStorage.removeItem(key);
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