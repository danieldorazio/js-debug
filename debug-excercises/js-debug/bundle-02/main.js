/*******************************************************************************
​
    Per questo esercizio, rispondi a queste domande:
    1- Che cosa fa questo codice?
    2- Sono presenti errori di sintassi?
    3- Sono presenti errori logici?
​
    Inserisci i tuoi commenti con le risposte alla fine dell'esercizio
​
*******************************************************************************/


// ESERCIZIO 1
function checkAge() {
    const myAge = 32;
    let message = '';

    if (myAge < 18) {
        message = `Sei troppo giovane! Hai ${myAge} anni!`;
    } else {
        message = 'Hai più di 18 anni!';
    }
    return message;
}
console.log(checkAge()); 

// 1- Che cosa fa questo codice?  controlla se l'età inserita è inferiore ai 18 anni e stampa un messaggio, altrimeni ne stampa un altro 
// 2- Sono presenti errori di sintassi? 
//1) riga 16: non deve essere const poiche il suo contenuto cambia da una stringa vuota ad un messaggio 
//2) riga 23: manca un return 
// 3- Sono presenti errori logici?
//1) riga 15: non ha senso inserire una costante all'interno della funzione invece passarlo come argomento della funzione 


// ESERCIZIO 2
function printColorsNumber() {
    const colors = ['blue', 'red', 'yellow', 'green', 'black'];
    console.log(`Nella mia palette ci sono ${colors.length} colori!`);
}
printColorsNumber();

// 1- Che cosa fa questo codice? stampa in console un messaggio con il nuemro di elementi all'interno dell'array colors 
// 2- Sono presenti errori di sintassi? errore di battitura parola length
// 3- Sono presenti errori logici? non ha molto senzo contare gli elementi di un array, messo dentro una finzione in questo modo, avrebbe più senso inserilo come argomento di funzione 


// ESERCIZIO 3
function addNumbers() {
    const userNumber = parseInt(prompt('Inserisci un numero'));
    const total = userNumber + 12;

    console.log(`Il risultato finale è ${total}`);
}
addNumbers();

// 1- Che cosa fa questo codice? chiede un numero come prompt e stampa in console il nmero + 12 
// 2- Sono presenti errori di sintassi? il prompt inserito è tipo sringa e non posso sommarlo, aggiungere parseInt
// 3- Sono presenti errori logici? lavore del prompt come argomento della funzione, creare una funzione per la somma è un po esaggerto 


// ESERCIZIO 4
function checkAccess() {
    const addresses = ['mymail@mail.com', 'yourmail@mail.com', 'hermail@mail.com', 'hismail@mail.com'];
    const userEmail = prompt('Inserisci il tuo indirizzo email');

    let grantAccess = false;

    if (addresses.includes(userEmail)) {
        grantAccess = true;
    }

    if (grantAccess === true) {
        console.log('Accesso consentito!');
    } else {
        console.log('Accesso negato!');
    }
}
checkAccess();

    // 1- Che cosa fa questo codice? controlla se una email, inserita dal prompt è presente nelle email gia salvate
    // 2- Sono presenti errori di sintassi?
    // 1) riga 72: confronto di una stringa con un valore booleano 

    // 3- Sono presenti errori logici? il prompt e l'array di email vanno messe fuori e passati come variabili, inserire un return  


// ESERCIZIO 5 (suggerimento: c'è un solo errore)
function checkAccessImproved() {
    const addresses = ['mymail@mail.com', 'yourmail@mail.com', 'hermail@mail.com', 'hismail@mail.com'];

    const userEmail = prompt('Inserisci il tuo indirizzo email');

    let grantAccess = 'false';

    for (let i = 0; i < addresses.length; i++) {
        const email = addresses[i];

        if (userEmail.length > 5) {

            if (email === userEmail) {
                grantAccess = 'true';

            }

        }

        if (grantAccess) {
            console.log('Accesso consentito!');
        } else {
            console.log('Accesso negato!');
        }
    }
}
    checkAccessImproved();

    // 1- Che cosa fa questo codice? funzione che mi fa inserire una email, ispeziona e paragona l'emeail
    // 2- Sono presenti errori di sintassi? mancava una parentesi graffa per chiudere la funzione 
    // 3- Sono presenti errori logici?




























