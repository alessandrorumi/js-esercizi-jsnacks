// Crea un array composto da 10 automobili.
// Ogni oggetto automobile avrà le seguenti proprietà: marca, modello e alimentazione (benzina, diesel, gpl, elettrico, metano).

// Dividi le automobili in 3 array separati: 
// nel primo array solo le auto a benzina, nel secondo solo le auto a diesel, nel terzo il resto delle auto.
 
// Infine stampa separatamente i 3 array.

const automobili = [
  {marca: "Fiat", modello: "500", alimentazione: "Benzina"},
  {marca: "Ford", modello: "Focus", alimentazione: "Diesel"},
  {marca: "Tesla", modello: "Model 3", alimentazione: "Elettrico"},
  {marca: "Volkswagen", modello: "Golf", alimentazione: "GPL"},
  {marca: "Renault", modello: "Clio", alimentazione: "Metano"},
  {marca: "BMW", modello: "X5", alimentazione: "Diesel"},
  {marca: "Hyundai", modello: "Kona", alimentazione: "Elettrico"},
  {marca: "Audi", modello: "A3", alimentazione: "Benzina"},
  {marca: "Opel", modello: "Corsa", alimentazione: "GPL"},
  {marca: "Toyota", modello: "Prius", alimentazione: "Ibrida"}
];

const autoBenzina = automobili.filter((auto) => {
  return auto.alimentazione === 'Benzina';
})
console.log(autoBenzina);

const autoDiesel = automobili.filter((auto) => {
  return auto.alimentazione === 'Diesel';
})
console.log(autoDiesel);

const autoAltro = automobili.filter((auto) => {
  return auto.alimentazione !== 'Benzina' && altro.alimentazione !== 'Diesel';
})
console.log(autoAltro);

