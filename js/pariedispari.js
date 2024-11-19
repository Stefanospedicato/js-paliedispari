/*
Pari e Dispari

L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
Sommiamo i due numeri
Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
Dichiariamo chi ha vinto.
*/

//Creo finestre di dialogo
const scelta = prompt('Pari o Dispari?').toLowerCase()
const numeroGiocatore = parseInt(prompt('Scegli un numero da 1 a 5'));

//riutilizzo la funzione
const numeroPc = random(); alert(`Il numero del Computer è ${numeroPc}`);

//Creo numero random per il computer
function random(){
  return Math.ceil(Math.random()*5)
}

//Creo Somma
let somma = numeroGiocatore + numeroPc;

//Stabiliamo se la somma è pari o dispari
function isPari(num){
  return num % 2 === 0;
}

//Ho creato due verdetti separati, che corrispondono alla parola che inserisce il giocatore (si trasforma in lowercase per corrispondere esattamente alle stringhe del verdetto).
let verdetto;
if(isPari(somma)){
  verdetto = 'pari'
} else { verdetto = 'dispari'}

//decretiamo il vincitore
if(scelta === verdetto){
  alert('Hai Vinto!')
} else {
  alert('Hai perso.')
}