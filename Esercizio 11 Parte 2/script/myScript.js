// Stampa in una lista in pagina l’anagrafica completa ottenuta nel precedente, provando ad usare destructuring e template literal.

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

// console.log(totale);

const myList = document.getElementById('list')

totale.forEach(element => {

  const {nome, cognome, professione} = element;

  // console.log(`Nome: ${nome}, Cognome: ${cognome}, Professione: ${professione};`)

  const myLi = `
  <li>
    Nome: ${nome}, Cognome: ${cognome}, Professione: ${professione};
  </li>`

  myList.innerHTML += myLi;

});


