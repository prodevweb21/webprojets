


function login(){
    
    var nom = document.getElementById("nom").value;
    var email = document.getElementById("email").value;
    var lieudenaissance = document.getElementById("lieudenaissance").value;
    var phone = document.getElementById("phone").value;


    var lettre = /^[A-Za-z]+$/;
    var evalide = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    var tvalide = /^[0-9]{4}-[0-9]{3}--[0-9]{1}[\\][A-Za-z]+$/;




    if (!lettre.test(nom)) {
        alert("Le nom doit comporter que des lettres alphabetiques");
    }
    
    if (!lettre.test(lieudenaissance)) {
            alert("La ville doit inclure que des lettres alphabetiques");
    } 

    if(!evalide.test(email)){
        alert("l'adresse n'est pas valide");
    }

    if(!tvalide.test(phone)){
        alert("Le numéro de téléphone n'est pas valide")
    }
}

       





function click() {
            document.getElementById("nom").value="";
            document.getElementById("lieudenaissance").value="";
            document.getElementById("email").value="";       
            document.getElementById("phone").value="";
        
        }
        




