// Crea un array vuoto. 
// Continua a chiedere all’utente numeri e se sono dispari li inserisci nell’array vuoto
// fino a quando il tuo array non è composto da 6 numeri dispari

let emptyArray = [];

let i = 0;

while (emptyArray.length < 6) {

  const askNumber = prompt('Inserisci numeri');
  console.log(askNumber);

  if (askNumber % 2 === 1) {
    emptyArray.push(askNumber);
  }

  i++

}

console.log('I 6 numeri dispari sono: ' + emptyArray);



// Utilizzando Do While

// let emptyArray = [];

// let i = 0;

//  do {

//   const askNumber = prompt('Inserisci numeri');
//   console.log(askNumber);

//   if (askNumber % 2 === 1) {
//     emptyArray.push(askNumber);
//   }

//   i++

// } while (emptyArray.length < 6);

// console.log('I 6 numeri dispari sono: ' + emptyArray);