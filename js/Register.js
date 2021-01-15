let passwortChecked=false;

function newKunde(){
    
    let kunde = {
        Vorname: document.getElementById("vorname").value,
        Nachname: document.getElementById("nachname").value,
        Geburtsdatum: document.getElementById("geburtsdatum").value,
        //Geschlecht: getGeschlecht(),
        Email: document.getElementById("email").value,
        Telefonnummer: document.getElementById("telefonnummer").value,
        Passwort: checkPasswort(),
        Postleitzahl: document.getElementById("plz").value,
        Ort: document.getElementById("ort").value,
        Strasse: document.getElementById("street").value,
        Hausnummer: document.getElementById("housenumber").value,
        Beschreibung: "",
        Ziel: "",
        Fortschritt: 0
    }

    if(kunde.Vorname != "" && kunde.Nachname != "" && kunde.Geburtsdatum != "" && kunde.Email != "" && kunde.Telefonnummer != "" && kunde.Passwort != ""){
        if(passwortChecked){
            loadIntoStorage(kunde);
            alert("Registirerung erfolgreich!")
            window.location = "login.html";
            return false;
        }
    }
    else{
        alert("Fülle alle Felder aus!");
        window.location = "signup.html";
        return false;
    } 
}

function checkPasswort(){
    
    while(!passwortChecked){ 
        if(document.getElementById("passwort").value == document.getElementById("passwort2").value){
            passwortChecked=true;
            return document.getElementById("passwort").value;
        }
        else{
            alert("Passwörter stimmen nicht überein!");
            return;
        }
    }
    
}

function loadIntoStorage(kunde){ 
    localStorage.setItem(document.getElementById("email").value, JSON.stringify(kunde));
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
