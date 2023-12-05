// Crea una funzione che accetti un numero indefinito di numeri e ne ritorni la somma.


function myFunction(...numbers) {

  let total = 0;

  numbers.forEach(element => total += element);

  return total

}

console.log(myFunction(1, 2, 3, 4, 6));