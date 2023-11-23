// L’utente inserisce due numeri in successione, con due prompt.
// Il software stampa il maggiore.

// Nr.1
const num1 = parseInt(prompt("Inserisci un numero"));
console.log(num1);

// Nr.2
const num2 = parseInt(prompt("Inserisci un altro numero"));
console.log(num2);

// Comparazione tra i due numeri

if (num1 > num2) {
  console.log(num1);

} else if (num1 < num2) {
  console.log(num2);

} else {
  console.log('I due numeri sono pari');
}