const parola = prompt('qual è la parola chiave?');

function add (parola){
    for (i = 0; i < parola.length; i++) {
        let risposta = true;

        if(parola.at(i) !== parola.at(-i)) {
           return false;
        }
        
    }    
    
}

const messaggio = add(parola)
 ? `la parola ${parola} è palindroma`
 : `la parola ${parola} non è palindroma`;

console.log(messaggio);



let max = 5;
let min = 1;
let pari = '2 in su';
let dispari = '1 in su';

const getRand = Math.floor(Math.random() * (max - min) + 1) + min;

function Summ (max, min) {
    if (getRand % 2 === 0) {
        return pari;
    } else {
        return dispari;
    }
}

let risultato = Summ()
console.log(risultato);