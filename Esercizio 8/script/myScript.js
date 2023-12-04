// Crea un array di oggetti che rappresentano degli animali.
// Ogni animale ha un nome, una famiglia e una classe.
// Es:
// [
//   { nome: ‘leone’, famiglia: ‘felidi’, classe: ‘mammiferi’ },
//   { nome: ‘cane’, famiglia: ‘canidi’, classe: ‘mammiferi’ },
//   { nome: ‘gallina’, famiglia: ‘fasianidi’, classe: ‘uccelli’ },
// ]
// Crea un nuovo array con la lista dei mammiferi.

const animali = [

  {nome: 'leone', famiglia: 'felidi', classe: 'mammiferi'},
  {nome: 'gatto', famiglia: 'felidi', classe: 'mammiferi'},
  {nome: 'pavone', famiglia: 'fasianidi', classe: 'uccelli'},
  {nome: 'lucertola', famiglia: 'iguania', classe: 'rettili'}

]

const mammiferi = animali.filter((animale) => {
  if (animale.classe === 'mammiferi') {
    return true
  }
});

console.log(animali);
console.log(mammiferi);


mammiferi.forEach((animale) => {
  console.log(animale)
})