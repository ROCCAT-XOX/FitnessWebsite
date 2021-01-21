let passwortChecked=false;
let userZiele = [];


//Funktion wird aufgeruden, wenn jemand auf Registrieren klickt
function newKunde(){
    

    //Daten werden übernommen, die Kunde in die Eingabefelder eingegeben hat
    let kunde = {
        Vorname: document.getElementById("vorname").value,
        Nachname: document.getElementById("nachname").value,
        Geburtsdatum: document.getElementById("geburtsdatum").value,
        Email: document.getElementById("email").value,
        Telefonnummer: document.getElementById("telefonnummer").value,
        Passwort: checkPasswort(),
        Postleitzahl: document.getElementById("plz").value,
        Ort: document.getElementById("ort").value,
        Strasse: document.getElementById("street").value,
        Hausnummer: document.getElementById("housenumber").value,
        Beschreibung: "",
        Ziel: "",
        Fortschritt: 0,
        Trainer: Math.round(Math.random() * (6 - 1)) + 1
    }


    //Wenn der Kunde, alle Felder ausgefüllt hat und die Variable passwortChecked true ist, wird er im LocalStorage gespeichert und auf die Login Seite weiter geleitet
    if(kunde.Vorname != "" && kunde.Nachname != "" && kunde.Geburtsdatum != "" && kunde.Email != "" && kunde.Telefonnummer != "" && kunde.Passwort != ""){
        if(passwortChecked){
            loadIntoStorage(kunde);
            alert("Registirerung erfolgreich!")
            window.location = "login.html";
            localStorage.setItem(kunde.Email+"+", JSON.stringify(userZiele)); //Wird ein Platz für die Ziele reserviert
            return false;
        }
    }
    else{
        alert("Fülle alle Felder aus!");
        window.location = "signup.html";
        return false;
    } 
}

//Es wird überprüft ob beide Passworteingaben übereinstimmen
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

