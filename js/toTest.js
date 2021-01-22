
function getAlter(){
    let today = new Date(); 
    let birthDate = new Date(1999, 6, 23); 
    let age = today.getFullYear() - birthDate.getFullYear();  
    let m = today.getMonth() - birthDate.getMonth(); 
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) { 
     age--; 
    } 
    return age;
}

function checkPasswort(value1, value2){
    
    if(value1 == value2){
        return value1;
    }
    else{
        alert("Passwörter stimmen nicht überein!");
        return;
    }  
}

function checkFortschritt(user){
    let fortschrittRounded;
    let anzahlZiele = user.length;  
    for(let i = 0; i<user.length; i++){
        anzahlZiele += user[i].unterziele.length;
    }
    
    let anzahlErledigteZiele = 0;
    for(let i = 0;i<user.length;i++){
        if(user[i].erledigt == 1){
            anzahlErledigteZiele++;
        }
        for(let r = 0; r<user[i].unterziele.length; r++){
            if(user[i].unterziele[r].erledigt == 1){
                anzahlErledigteZiele++;
            }
        }
    }
    let fortschritt = (anzahlErledigteZiele/anzahlZiele) * 100;
    fortschrittRounded = fortschritt.toFixed(2);  
    return fortschrittRounded;
}