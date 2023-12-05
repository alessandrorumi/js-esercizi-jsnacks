// Dati due array di oggetti che rappresentano parti di una anagrafica di persone (nome, cognome, professione),
// crea un array che contenga tutti gli elementi di entrambi e fai un log di questo ultimo array.

// Primo array di persone
const persone1 = [
  { nome: 'Mario', cognome: 'Rossi', professione: 'Ingegnere' },
  { nome: 'Laura', cognome: 'Bianchi', professione: 'Medico' },
  { nome: 'Giovanni', cognome: 'Verdi', professione: 'Docente' },
  { nome: "Giovanni", cognome: "Azzurri", professione: "Programmatore" },
  { nome: "Elena", cognome: "Rosa", professione: "Psicologa" },
  { nome: "Marco", cognome: "Blu", professione: "Cuoco" }
];

// Secondo array di persone
const persone2 = [
  { nome: 'Anna', cognome: 'Neri', professione: 'Avvocato' },
  { nome: 'Luca', cognome: 'Marroni', professione: 'Architetto' },
  { nome: 'Elena', cognome: 'Gialli', professione: 'Programmatore' },
  { nome: "Francesca", cognome: "Arancio", professione: "Designer" },
  { nome: "Alessandro", cognome: "Viola", professione: "Musicista" }
];

const totale = [...persone1, ...persone2];

console.log(totale);
