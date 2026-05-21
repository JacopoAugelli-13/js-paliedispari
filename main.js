const question = prompt('qual è la parola chiave?');
let risposta = 'Polindroma';

function add (question){
    if(question === risposta) {

        console.log('è la parola giusta')
        return true;
        
    } else {
        return false;
    }
}

let Result = add(question);
console.log(Result);

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