// 1 - Scrivi una funzione trovaMassimo(arr) che accetti un array di numeri e restituisca il valore massimo presente.

function trovaMassimo(n1, n2, n3, n4, n5) {
    const numeriArray = [n1, n2, n3, n4, n5]
    let maggiore = 0
    
    for (let i = 0; i < numeriArray.length - 1; i++) {

        if (numeriArray[i] > maggiore) {
            maggiore = numeriArray[i]
        }
    }

    return maggiore
}

let risultato1 = trovaMassimo(11, 7, 3, 1, 9)

console.log(risultato1)


// 2 - Scrivi una funzione contaVocali(str) che accetti una stringa e restituisca il numero di vocali (a, e, i, o, u) presenti nella stringa.

function contaVocali(str) {
    const stringa = str.toString()
    let count = 0

    for (let i = 0; i < stringa.length; i++) {
        if (stringa.charAt(i) === 'a' || stringa.charAt(i) === 'e' || stringa.charAt(i) === 'i' || stringa.charAt(i) === 'o' || stringa.charAt(i) === 'u') {
            count += 1
        }
    }

    return count
}

let risultato2 = contaVocali('supercalifragilistichespiralidoso')

console.log(risultato2);

// 3 - Scrivi una funzione invertiArray(arr) che accetti un array e restituisca un nuovo array con gli elementi in ordine inverso.

// 4 - Scrivi una funzione generaCasuali(n, min, max) che restituisca un array di n numeri casuali compresi tra min e max.

// 5 - Scrivi una funzione filtraMaggioriDi che prende un array di numeri e un valore, e restituisce un nuovo array contenente solo i numeri maggiori del valore specificato.

// 6 - Scrivi una funzione parolaPiuLunga(frase) che accetti una stringa contenente più parole e restituisca la parola più lunga.

// 7 - Scrivi una funzione unisciEOrdina che prende due array di numeri, li unisce in un unico array e restituisce l'array risultante ordinato in modo crescente.

// 8 - Scrivi una funzione contaOccorrenze che prende un array e un valore, e restituisce il numero di volte che il valore appare nell'array.

// 9 - Scrivi una funzione rimuoviDuplicati che prende un array e restituisce un nuovo array senza elementi duplicati. L'ordine degli elementi deve essere mantenuto.