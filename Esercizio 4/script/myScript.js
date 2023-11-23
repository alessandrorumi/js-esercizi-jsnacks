// Crea un array vuoto.
// Chiedi per 6 volte all’utente di inserire un numero,
// se è dispari inseriscilo nell’array.

// const emptyArray = [];

// for (let i = 0; i < 6; i++) {

//   const numbers = parseInt(prompt('Inserisci un numero'));

//   if (numbers % 2 === 1) {
//     emptyArray.push(numbers);
//   }

// }

// console.log('I numeri dispari sono: ' + emptyArray);



const emptyArray =[];
const emptyOddArray =[];

for (let i = 1; i <= 6; i++) {

  const numbers = parseInt(prompt(`Inserisci il ${i}° numero`));
  emptyArray.push(numbers);
  document.getElementById('parameter2').innerHTML = `I numeri digitati sono: ${emptyArray}`;

  if (numbers % 2 === 1) {
    emptyOddArray.push(numbers);
  }

}

document.getElementById('result').innerHTML = `I numeri dispari sono: ${emptyOddArray}`;