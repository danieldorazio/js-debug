/*******************************************************************************

    Per ognuno dei seguenti esercizi, rispondi a queste domande:
    1- Che cosa fa questo codice?
    2- Sono presenti errori di sintassi?
    3- Sono presenti errori logici?

    Inserisci i tuoi commenti con le risposte, sotto ciascun esercizio

*******************************************************************************/


// ESERCIZIO 1
for (let i = 0; i < 5; i++) {
    console.log(i);
}

// 1- Che cosa fa questo codice? stampa in console ogni interazione da 0 a 4
// 2- Sono presenti errori di sintassi? > invece che <
// 3- Sono presenti errori logici? no


// ESERCIZIO 2
function addIfEven(num) {
    if (num % 2 == 0) {
        return num + 5;
    }
    return num;
}

// 1- Che cosa fa questo codice? controlla se un numero inserito come argomento della funzione è un numero pari o dispari e se è returna il numero inserito +5, se dispari solo il numero 
// 2- Sono presenti errori di sintassi? mancava un uguale come consizione nell'if 
// 3- Sono presenti errori logici? no

// ESERCIZIO 3
function loopToFive() {
    for (let i = 0; i < 5; i++) {
        console.log(i);
    }
}

// 1- Che cosa fa questo codice? funzione che mi stampa in cosole da 0 a 4 
// 2- Sono presenti errori di sintassi? "," invece che ";" 
// 3- Sono presenti errori logici? non ha molto senzo come funzione 


// ESERCIZIO 4 (suggerimento: ci sono 7 errori)
function displayEvenNumbers() {
    let numbers = [1, 2, 3, 4, 5, 6, 7, 8];
    let evenNumbers = [];
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] % 2 == 0) {
            evenNumbers.push(numbers[i]);
        }  
    } 
    return evenNumbers;
}
console.log(displayEvenNumbers());  // dovrebbe restituire [2,4,6,8]

// 1- Che cosa fa questo codice? funzione che crea un nuovo array sono con gli elementi pari del primo array 
// 2- Sono presenti errori di sintassi?
//1) riga 51: ";" dopo i++ 
//2) riga 51: togliere il -1, far scorrere tutto l'array 
//3) riga 52: mancanza di un uguale
//4) riga 52: ";" in più 
//5) riga 52: numbers è un array non posso operare con operatori arimetici, mettere numbers[i]
//6) riga 53: pushare l'elemento  
//7) riga 55: sposate il return fuori dal ciclo for 

// 3- Sono presenti errori logici?