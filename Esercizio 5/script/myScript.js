// In un array sono contenuti i nomi degli invitati alla festa del grande Gatsby, 
//  chiedi all’utente il suo nome e comunicagli se può partecipare o no alla festa
// sviluppato con un ciclo while
// bonus: ottimizzare il ciclo

const arrayInvitati = ['Ale', 'Piero', 'Paolo', 'Luigi'];

const nomeInvitato = prompt('Come ti chiami?');

let i = 0;

let nomeValido = false;

while (i < arrayInvitati.length && nomeInvitato !== true) {

  if (nomeInvitato === arrayInvitati[i]) {
    nomeValido = true;
  }
  i++
}

if (nomeValido) {
  console.log('Puoi entrare');
  
} else {
  console.log('Non puoi');
}
