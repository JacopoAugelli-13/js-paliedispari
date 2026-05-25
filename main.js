const parola = prompt('qual è la parola chiave?');

function add (parola){
    for (i = 0; i < parola.length; i++) {
        

        if(parola.at(i) !== parola.at(-i - 1)) {
           return false;
        }
        
    }    
    return true;
}

const messaggio = add(parola)
 ? `la parola ${parola} è palindroma`
 : `la parola ${parola} non è palindroma`;

console.log(messaggio);



let max = 5;
let min = 1;
let pari = 'pari';
let dispari = 'dispari';

let scelta = prompt('scegli pari o dispari')
let decisionePrimoUtente = Math.floor(Math.random() * (max - min + 1) + min);
let decisioneSecondoUtente = Math.floor(Math.random() * (max - min + 1) + min);

console.log( `Giocatore 1 ha scelto ${decisionePrimoUtente}`)
console.log( `Giocatore 2 ha scelto ${decisioneSecondoUtente}`)

function summ () {
    let somma = decisionePrimoUtente + decisioneSecondoUtente;
    console.log(`la somma è ${somma}`);
    
    if(somma % 2 === 0){ 
        return pari;
    } else {
        return dispari;
    }
}


let risultato = summ();

const alert = (risultato === pari)
 ? `la parola è Pari`
 : `la parola è Dispari`;

 if(scelta.toLowerCase() === risultato) {
    console.log('hai vinto')
 } else {
    console.log('hai perso')
 }

console.log(alert)
console.log(risultato);