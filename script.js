// 1 - Scrivi una funzione trovaMassimo(arr) che accetti un array di numeri e restituisca il valore massimo presente.

function trovaMassimo(arr) {
    let maggiore = 0
    
    for (let i = 0; i < arr.length - 1; i++) {

        if (arr[i] > maggiore) {
            maggiore = arr[i]
        }
    }

    return maggiore
}

let risultato1 = trovaMassimo([11, 7, 3, 1, 9])

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

function invertiArray(arr) {
    const arrayInvertito = []
    let arrayIndice = null

    for (let i = 0; i < arr.length; i++) {
        arrayIndice = arr[i]

        arrayInvertito.unshift(arrayIndice)
    }

    return arrayInvertito
}

let risultato3 = invertiArray([1, 'due', 3, 'quattro', 5])
console.log(risultato3)

// 4 - Scrivi una funzione generaCasuali(n, min, max) che restituisca un array di n numeri casuali compresi tra min e max.

function generaCasuali(n, min, max) {
    let arrayNumeri = []

    for (let i = 1; i <= n; i++) {
        let numeroCasuale = Math.round(Math.random() * (max - min) + min)
        arrayNumeri.push(numeroCasuale)
    }

    return arrayNumeri
}

let risultato4 = generaCasuali(50, 10, 20)

console.log(risultato4)

// 5 - Scrivi una funzione filtraMaggioriDi che prende un array di numeri e un valore, e restituisce un nuovo array contenente solo i numeri maggiori del valore specificato.

function filtraMaggioriDi(value, arr) {
    let arrayMaggiori = []

    for (let i = 0; i <= arr.length - 1; i++) {
        if (arr[i] > value) {
            arrayMaggiori.push(arr[i])
        }
    } 

    return arrayMaggiori
} 

let risultato5 = filtraMaggioriDi(7, [1, 5, 10, 15, 25])

console.log(risultato5)

// 6 - Scrivi una funzione parolaPiuLunga(frase) che accetti una stringa contenente più parole e restituisca la parola più lunga.

function parolaPiuLunga(frase) {
    let conteggioMaggiore = 0
    let parole = ''
    let parolaMaggiore = ''

    for (let i = 0; i <= frase.length; i++) {
        if (frase.charAt(i) === ' ') {
            if (parole.length > conteggioMaggiore) {
                conteggioMaggiore = parole.length
                parolaMaggiore = parole
                parole = ''
            } else {
                parole = ''
            }
        } else {
        parole += frase.charAt(i)
        }
    }

    if (parole.length > conteggioMaggiore) {
        conteggioMaggiore = parole.length
        parolaMaggiore = parole
        parole = ''
    }

    return parolaMaggiore
}

let risultato6 = parolaPiuLunga('html css javascript')

console.log(risultato6)

// 7 - Scrivi una funzione unisciEOrdina che prende due array di numeri, li unisce in un unico array e restituisce l'array risultante ordinato in modo crescente.

function unisciEOrdina(arr1, arr2) {
    let arraySomma = [...arr1, ...arr2]

    for (let index = 0; index < arraySomma.length - 1; index++) {
        for (let i = 0; i < arraySomma.length - 1 - index; i++) {
            if (arraySomma[i] > arraySomma[i + 1]) {
                
                let maggiore = arraySomma[i];
                arraySomma[i] = arraySomma[i + 1];
                arraySomma[i + 1] = maggiore;
            }
        }
    }

    return arraySomma
}

let risultato7 = unisciEOrdina([4, 7, 10], [8, 5, 2, 3, 6, 9, 1])

console.log(risultato7)

// 8 - Scrivi una funzione contaOccorrenze che prende un array e un valore, e restituisce il numero di volte che il valore appare nell'array.

function contaOccorrenze(value, arr) {
    let conteggio = 0

    for (let i = 0; i <= arr.length -1; i++) {
        if (value == arr[i]) {
            conteggio += 1
        }
    }

    return conteggio
}

let risultato8 = contaOccorrenze(3, [3, 'tre', 3, 3, 'tre', 4, 8, 9, 3])

console.log(risultato8);


// 9 - Scrivi una funzione rimuoviDuplicati che prende un array e restituisce un nuovo array senza elementi duplicati. L'ordine degli elementi deve essere mantenuto.

function rimuoviDuplicati(arr) {
    let arrayUnici = []

    for (let i = 0; i < arr.length; i++) {
        let doppio = false;

        for (let index = 0; index < arrayUnici.length; index++) {
            if (arr[i] === arrayUnici[index]) {
                doppio = true;
                break;
            }
        }

        if (doppio == false) {
            arrayUnici.push(arr[i])
        }
    }

    return arrayUnici
}

let risultato9 = rimuoviDuplicati([1, 2, 1, 2, 3, 4, 5, 5, 5, 6, 7, 8, 7, 9, 9])

console.log(risultato9)