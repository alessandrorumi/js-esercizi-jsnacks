// L’utente inserisce due parole in successione, con due prompt.
// Il software stampa prima la parola più corta, poi la parola più lunga.

// Stringa1
const stringa1 = prompt("Inserisci una stringa");
document.getElementById('parameter1').innerHTML = stringa1;

// Stringa2
const stringa2 = prompt("Inserisci un'altra stringa");
document.getElementById('parameter2').innerHTML = stringa2;

// Comparazione tra le due stringhe

if (stringa1.length > stringa2.length) {
  document.getElementById('result').innerHTML = `La stringa più lunga è: ${stringa1}, la stringa più corta è: ${stringa2}`;
  
} else if (stringa1.length < stringa2.length) {
  document.getElementById('result').innerHTML = `La stringa più lunga è: ${stringa2}, la stringa più corta è: ${stringa1}`;

} else {
  document.getElementById('result').innerHTML = 'Le due stringhe hanno la stessa lunghezza';
}