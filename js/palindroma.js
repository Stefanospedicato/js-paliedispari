/*
Palidroma
Chiedere all’utente di inserire una parola
Creare una funzione per capire se la parola inserita è palindroma
*/

//creo finestra di dialogo
const parola = prompt('Inserisci una parola')

//devo creare il paragone tra la parola e la stessa invertita
function isPalindroma (parola){

  //creo una stringa vuota da popolare
    let parolaGirata = '';

  //Inverto la parola
  for(let i= parola.length -1; i>=0 ; i--){
    parolaGirata+=parola[i]
  }

  //creo le condizioni dopo il paragone
    if (parola === parolaGirata) {
    return true
    } else{ 
      return false
    }
}

//Richiamo la funziona e stampo
if (isPalindroma(parola)){
  console.log('La parola è palindroma')
} else{
  console.log('La parola NON è palindroma')
}