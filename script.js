/* 

Tramite due prompt chiedere all'utente nome e genere e stamparlo in pagina.
Se il genere è M il colore sarà "verde", se è F sarà "rosso"
*/
// Fase di preparazione 

const namePlaceholder = document.getElementById("name-placeholder")
// Fase di raccolta dati
const firstName = prompt("Inserisci il tuo nome")

const genere = prompt("Inserire il genere (M o F)")
// Fase di elaborazione
const nameColor = (genere === "M" ) ? "verde" : "rosso" 
// Fase di output
console.log(nameColor);

namePlaceholder.innerHTML= `${firstName} ${genere} `

namePlaceholder.className = nameColor