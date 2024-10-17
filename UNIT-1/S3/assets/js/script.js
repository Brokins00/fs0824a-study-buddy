let h1 = document.getElementById('titolo')
console.log("h1", h1)
h1 = document.querySelector('#testo')
console.log("h1 selector", h1)
let li = document.querySelectorAll('li')
console.log('li', li)
let home = document.getElementById('home')
console.log('home', home)
let li2 = document.querySelectorAll("nav ul li")
console.log('li2', li2)

let numeri_sorteggiare = document.getElementById('numeri_sorteggiare')
let usciti = []
let interval

let numeri_usciti = document.getElementById('numeri_usciti')

const sorteggia = (numeri = 0, bottone) => {
    usciti = []
    numeri_usciti.innerText = ''
    interval = setInterval(() => {
        if (usciti.length == numeri) {
            clearInterval(interval)
            bottone.disabled = false
            numeri_sorteggiare.disabled = false
            return;
        }
        let random = Math.floor(Math.random() * 100) + 1
        while (usciti.includes(random)) {
            random = Math.floor(Math.random() * 100) + 1
        }
        usciti.push(random)
        if (usciti.length > 1 && usciti.length < numeri) {
            numeri_usciti.innerText = `${numeri_usciti.innerText} ${random} -`
        }else if (usciti.length == 1 && usciti.length < numeri) {
            numeri_usciti.innerText = `${random} -`
        } else {
            numeri_usciti.innerText = `${numeri_usciti.innerText} ${random}`
        }
        // Parte di Francois Lampason 
        // numeri_usciti.innerText = `${numeri_usciti.innerText} - ${random}`
    }, 1000)
}

function inizia(bottone) {
    let valore = numeri_sorteggiare.value
    bottone.disabled = true
    numeri_sorteggiare.disabled = true
    sorteggia(valore, bottone)
}