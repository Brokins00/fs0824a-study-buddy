/* ESERCIZIO 8
 Scrivi una funzione di nome "upperFirst", che riceve come parametro una stringa formata da diverse parole.
 La funzione deve rendere maiuscola la prima lettera di ogni parola contenuta nella stringa.
*/

function upperFirst(stringa = "") {
    let array = stringa.split("");
    console.log(array)
    let nuovastringa = ""
    let maiuscolo = false
    for (let i = 0; i < array.length; i++) {
        console.log(array[i])
        if (maiuscolo) {
            if (array[i] == " ") {
                maiuscolo = false
            }
        } else {
            array[i] = array[i].toUpperCase()
            maiuscolo = true
        }
        nuovastringa += array[i]
    }
    console.log(nuovastringa)
}

upperFirst("ciao come stai")

function giveMeRandom(n) {
    let array = [];
    for (let i=0; i < n; i++) {
        let random = Math.floor(Math.random() * 10)
        array.push(random);
    }
    return array
}

/* EXTRA 1
 Scrivi una funzione chiamata "checkArray" che riceve un array di numeri casuali (creati con la funzione "giveMeRandom") e per ogni elemento stampa in console
 se il suo valore è maggiore di 5 o no.
 La funzione deve inoltre ritornare la somma di tutti i valori maggiori di 5.
*/

function checkArray(numeri) {
    let somma = 0
    console.log(numeri)
    for (let i = 0; i < numeri.length; i++) {
        if (numeri[i] > 5) {
            console.log('Il numero '+numeri[i]+" è maggiore di 5")
            somma += numeri[i]
        } else if (numeri[i] < 5) {
            console.log('Il numero '+numeri[i]+" è minore di 5")
        } else {
            console.log('Il numero è uguale a 5')
        }
    }
    return somma
}

let somma = checkArray(giveMeRandom(10))
console.log(somma)

/* EXTRA 2
 Nel tuo eCommerce disponi di un'array di oggetti chiamato "shoppingCart". Ognuno di questi oggetti ha le seguenti proprietà: "price", "name", "id" e "quantity".
 Crea una funzione chiamata "shoppingCartTotal" che calcola il totale dovuto al negozio (tenendo conto delle quantità di ogni oggetto).
*/

const shoppingCart = [
    {
        price: 10,
        name : "Prodotto 1",
        id: 1,
        quantity: 3
    },
    {
        price: 10,
        name : "Prodotto 2",
        id: 1,
        quantity: 3
    },
    {
        price: 10,
        name : "Prodotto 3",
        id: 1,
        quantity: 3
    },
    {
        price: 10,
        name : "Prodotto 4",
        id: 1,
        quantity: 3
    },
]

function shoppingCartTotal() {
    let totale = 0
    for (let i = 0; i < shoppingCart.length; i++) {
        totale += (shoppingCart[i].price * shoppingCart[i].quantity)
    }
    return totale
}

console.log(shoppingCartTotal())

console.log(true && false) //false
console.log(false && true) //false
console.log(true && true) //true
console.log(false && false) //false

console.log(true || false) //true
console.log(false || true) // true
console.log(true || true) // true
console.log(false || false) //false