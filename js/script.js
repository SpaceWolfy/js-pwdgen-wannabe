/* 
1) Necessito di richiedere all'utente il proprio nome, seguito dal cognome e successivamente 
dal suo colore preferito.

- Partirò dunque dalla costruzione di tre variabili: 
le prime due saranno const in quanto racchiuderanno dati personali, 
la terza sarà una variabile let, ipotizzando il fatto che una preferenza possa variare 
anche in brevi intervalli di tempo.

- Poiché sto effettuando una richiesta di informazioni, alle variabili sopraccitate assocerò dei prompt()

2) Una volta recuperate le informazioni, dovrò stampare a schermo una password 
che comprenda i dati richiesti secondo l'ordinamento "nome-cognome-colorepreferito", seguiti dal numero 21;

esempio: nomecognomecolorepreferito21

- Creerò dunque una variabile nominata htmlElement, che conterrà l'oggetto HTML con id: #password
in cui stamperò le informazioni recuperate.
*/

//Creazione dei tre prompt:

// quello che viene scritto nel prompt sottostante è ora in name
const firstName = prompt('Qual è il tuo nome?');
/* console.log(firstName); */

// quello che viene scritto nel prompt sottostante è ora in surname
const surname = prompt('Qual è il tuo cognome?');
/* console.log(surname); */

// quello che viene scritto nel prompt sottostante è ora in favoriteColor
let favoriteColor = prompt('Inserisci il tuo colore preferito');
/* console.log(favoriteColor); */

//---------------------------------------------------

//Ora vado a concatenare le tre variabili, racchiudendole in una unica, chiamata userPassword
let userPassword = firstName + surname + favoriteColor;
/* console.log(userPassword); */

//in htmlElement è contenuto l'id #password dell'HTML; il codice sottostante ci permetterà di stampare a schermo la variabile.
let htmlElement = document.getElementById ('password');
htmlElement.innerHTML = (`${userPassword}21`);

/* Test metodo di scrittura alternativo - non prevede la creazione di una variabile ulteriore poiché la somma 
viene effettuata direttamente all'interno di htmlElement.innerHTML */

/* let htmlElement = document.getElementById ('password');
htmlElement.innerHTML = (`${firstName}` + `${surname}` + `${favoriteColor}` + '21'  ); */
