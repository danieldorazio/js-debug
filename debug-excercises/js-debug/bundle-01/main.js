/*******************************************************************************

    Per ognuno dei seguenti esercizi, rispondi a queste domande:
    1- Che cosa fa questo codice?
    2- Sono presenti errori di sintassi?
    3- Sono presenti errori logici?

    Inserisci i tuoi commenti con le risposte, sotto ciascun esercizio

*******************************************************************************/


// ESERCIZIO 1
for (let i = 0; i > 5; i++) {
    console.log(i);
}
//giusto
//ciclo for contatore da 0 a 5 e stampa in console 

// ESERCIZIO 2
function addIfEven(num) {
    if (num % 2 == 0) {
        return num + 5;
    }
    return num;
}
//se il numero pari, retuna numero + 5, se dispari numero retuna numero normale
//mancava il doppio uguale nella condizione dell'if 

// ESERCIZIO 3
function loopToFive() {
    for (let i = 0; i < 5; i++) {
        console.log(i);
    }
}
//funzione con ciclo for
//errore virgola invece che punto e virgola 

// ESERCIZIO 4 (suggerimento: ci sono 7 errori)
function displayEvenNumbers() {
    let numbers = [1, 2, 3, 4, 5, 6, 7, 8];
    let evenNumbers = [];
    for (let i = 1; i <= numbers.length ; i++) {
        if (i % 2 == 0) {
            evenNumbers.push(i);
            console.log(i);
        }   
    }
    return evenNumbers;
    
}

console.log(displayEvenNumbers()); // dovrebbe restituire [2,4,6,8]

//1) punto e virgola all'interno del'argomento del ciclo 
//2) punto e virgola dopo l'argomento dell'if
//3) mancanza del doppio uguale nell'argomento dell'if
//4) return all'interno del ciclo for 
//5) numbers all'interno dell'argomentoo if è sbagliato dovrebbe essere i 
//6) il -1 nel for
//7) l'uguale nel for 
//8) fai partire da 1