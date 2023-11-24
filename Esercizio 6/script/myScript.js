// Crea un array vuoto.
// Chiedi per 6 volte all’utente di inserire un numero,
// se è dispari inseriscilo nell’array.

const emptyArray = [];

let i = 0;

while (i < 6) {

  const askNumber = prompt('Inserisci un numero');
  console.log(askNumber);

  if (askNumber % 2 === 1) {
    emptyArray.push(askNumber);
  }
  i++
}

console.log('I numeri dispari sono: ' + emptyArray);

