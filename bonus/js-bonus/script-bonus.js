/* 
Lo script in questione consentirà di impostare 
delle risposte ad alcune ipotetiche domande di sicurezza per un account. 

1) Tramite un alert l'utente verrà avvisato dell'intento della pagina.

2) Partiranno 5 prompt, a cui l'utente dovrà rispondere

3) Le risposte verranno visualizzate sulla pagina. 
*/

//Sezione (1), setup dell'alert:
alert('Stai per accedere ad una pagina in cui potrai impostare le risposte a diverse domande di sicurezza, al fine di proteggere il tuo account; vuoi continuare?');

//Sezione (2), setup dei prompt:
// la risposta data al prompt sottostante verrà racchiusa in firstQuestion
const firstQuestion = prompt('Qual è il nome di tuo padre?');

// la risposta data al prompt sottostante verrà racchiusa in secondQuestion
const secondQuestion = prompt('Come si chiamava il tuo primo amore?');

// la risposta data al prompt sottostante verrà racchiusa in thirdQuestion
const thirdQuestion = prompt('Qual è il tuo soprannome?');

// la risposta data al prompt sottostante verrà racchiusa in fourthQuestion
const fourthQuestion = prompt('Che sport praticavi da piccolo?');

// la risposta data al prompt sottostante verrà racchiusa in fifthQuestion
let fifthQuestion = prompt('Quale automobile desideri possedere?');

//Sezione (3), stampa a video (ordine ascendente) delle risposte fornite dall'utente all'interno dei singoli prompt:

//nelle variabili sottostanti sono contenuti gli'id dei div relativi alle domande presenti nel codice HTML; il codice sottostante ci permetterà di stampare a schermo le risposte dei prompt.
/* Domanda 1 */
let firstAnswer = document.getElementById ('dom-1');
firstAnswer.innerHTML = (`${firstQuestion}`);

/* Domanda 2 */
let secondAnswer = document.getElementById ('dom-2');
secondAnswer.innerHTML = (`${secondQuestion}`);

/* Domanda 3 */
let thirdAnswer = document.getElementById ('dom-3');
thirdAnswer.innerHTML = (`${thirdQuestion}`);

/* Domanda 4 */
let fourthAnswer = document.getElementById ('dom-4');
fourthAnswer.innerHTML = (`${fourthQuestion}`);

/* Domanda 5 */
let fifthAnswer = document.getElementById ('dom-5');
fifthAnswer.innerHTML = (`${fifthQuestion}`);

