function validation()
{
	var msg="";
	
	if (document.getElementById("nom").value==''){
		msg +="la saisie du nom est obligatoire";
	
	}
	if (document.getElementById("prenom").value==''){
		msg +="la saisie du prenom est obligatoire";
	
	}
	if (document.getElementById("date").value==''){
		msg +="la saisie de la date est obligatoire";
	
	}
	if (document.getElementById("Mail").value==''){
		msg +="la saisie de le mail est obligatoire";
	
	}
	if (document.getElementById("adresse").value==''){
		msg +="la saisie de l'adresse est obligatoire";
	
	}
	document.getElementById("error").innerHTML=msg;
	
if (msg==''){
		document.getElementById("resultat").innerHTML="bienvenue" ;
	}
}

