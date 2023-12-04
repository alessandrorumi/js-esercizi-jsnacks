// Crea un array di oggetti che rappresentano delle persone.
// Ogni persona ha un nome, un cognome e un’età.
// Crea un nuovo array inserendo, per ogni persona, una frase con il nome e cognome e l’indicazione se può guidare, in base all’età.

const persone = [

  {'nome': 'Alessandro', 'cognome': 'Rumi', eta: 28},
  {'nome': 'Anna', 'cognome': 'Rossi', eta: 60},
  {'nome': 'Piero', 'cognome': 'Verdi', eta: 17},
  {'nome': 'Giovanna', 'cognome': 'Bianchi', eta: 12}

]

const puoiGuidare = persone.map((persona) => {
  if (persona.eta >= 18) {
    return `${persona.nome} ${persona.cognome} può guidare`
  } else {
    return `${persona.nome} ${persona.cognome} non può guidare`
  }
})

console.log(puoiGuidare)


