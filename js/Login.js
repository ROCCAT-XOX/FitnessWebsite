//Trainer werden Hart Codiert

let trainer = [
    {
        ID: "1",
        Vorname: "Chris",
        Nachname: "Hemsworth",
        Email: "chris.hemsworth@gmail.com",
        Passwort: "thor"
    },
    {
        ID: "2",
        Vorname: "Chris",
        Nachname: "Evans",
        Email: "chris.evans@gmail.com",
        Passwort: "captainamerica"
    },
    {
        ID: "3",
        Vorname: "Dwayne",
        Nachname: "Johnson",
        Email: "dwayne.johnson@gmail.com",
        Passwort: "therock"
    },
    {
        ID: "4",
        Vorname: "Gal",
        Nachname: "Gadot",
        Email: "gal.gadot@gmail.com",
        Passwort: "wonderwoman"
    },
    {
        ID: "5",
        Vorname: "Mrs",
        Nachname: "Bella",
        Email: "mrs.bella@gmail.com",
        Passwort: "youtube"
    },
    {
        ID: "6",
        Vorname: "Pamela",
        Nachname: "Reif",
        Email: "pamela.reif@gmail.com",
        Passwort: "fitness"
    }
]

//Funktion wird ausgeführt, wenn ein User sich anmelden will
function anmelden(){
    let emailEingabe = document.getElementById("email").value;
    let passwortEingabe = document.getElementById("pw").value;
    
    var retrievedKunde = localStorage.getItem(emailEingabe);
    retrievedKunde = JSON.parse(retrievedKunde);


    //Zunächst wird überprüft, ob die eingegebenen Daten von einem Kunden stammen, dabei muss natürlich Email-Adresse und Passwort übereinstimmen
    try{
        if(emailEingabe == retrievedKunde.Email){
            if(passwortEingabe == retrievedKunde.Passwort){

                localStorage.setItem("aktiv", emailEingabe)
                window.location ="userInterface.html";
                return false;
            }
            else{
                alert("Kundenpasswort falsch!");
                return;
            }
        }
    }
    catch{
        console.log("Kein gültiges Kundenkonto!");
    }

    //Wenn die Eingabe-Daten nicht stimmen, wird geprüft, ob sich ein Trainer einloggen möchte; hier wird ebenfalls getestet, ob Passwort und Email übereinstimmen
    try{
        for(let i=0; i<trainer.length; i++){
            if(emailEingabe == trainer[i].Email){
                if(passwortEingabe == trainer[i].Passwort){
                    window.location ="trainerInterface.html";
                    return false;
                }
                else{
                    alert("Trainerpasswort falsch!");
                    return;
                }
            }
        }
    }
    catch{
       console.log("Kein gültiges TrainerKonto!"); 
    }
    alert("Kein gültiges Konto!");
}