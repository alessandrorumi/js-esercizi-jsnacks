// Il software deve chiedere per 5 volte all’utente di inserire un numero. 
//  Il programma stampa la somma di tutti i numeri inseriti.

// Richiesta 5 numeri

let sum = 0;

for (let i = 0; i < 5; i++) {

  const numbers = parseInt(prompt('Inserisci un numero'));

  console.log(numbers);

  sum = sum + numbers;

}

console.log('La somma dei numeri è: ' + sum);