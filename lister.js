'use strict'

/*
*
* Nesten alt du behøver å vite om lister i JavaScript
*
* */

// Lage en ny, tom liste

var liste = []

// Lage en ny liste med strenger (husk fnutter)

var listeMedStrenger = ['en', 'to', 'tre', 'fire']

// Lage en ny liste med tall (husk _ikke_ fnutter og _ikke_ mellomrom om det er høye tall

var listeMedTall = [1, 2, 3, 4, 5, 9, 10, 110]

// For å finne ut hvor lang en liste er bruker du length

liste.length //=> 0

listeMedStrenger.length //=> 4

listeMedTall.length //=> 8

// Når du skal plukke ut innhold fra en liste bruker du indexene
// Indexene i JavaScript starter på 0

listeMedStrenger[0] //=> 'en'

listeMedTall[1] //=> 2

// For å sortere en liste alfabetisk bruker du sort()
listeMedStrenger.sort() //=> ['en', 'fire', 'to', 'tre']

// Sort funker ikke så godt på tall
listeMedTall.sort() //=> [1, 10, 110, 2, 3, 4, 5, 9]

// Da må du ha en hjelpefunksjon

function tallSortering (a, b) {
  return a - b
}

// Bruk sort med hjelpefunksjon

listeMedTall.sort(tallSortering) //=> [1, 2, 3, 4, 5, 9, 10, 110]

// Trenger du en funksjon som sortere fra høyeste til laveste?
// Bytt plass på a og b _ett_ av stedene

function tallSorteringOmvendt (b, a) {
  return a - b
}

// Bruk sort med den nye hjelpefunksjonen
listeMedTall.sort(tallSorteringOmvendt) //=> [110, 10, 9, 5, 4, 3, 2, 1]

// For å reversere eller snu en liste bruker du reverse()

listeMedStrenger.reverse() //=> ['tre', 'to', 'fire', 'en']

/*
* Synes du det forrige resultatet var pussig?
* Husk at vi kjørte listeMedStrenger.sort() tidligere, så det er den sorterte listen vi nå snur
* Hadde vi snudd listen _før_ den ble sortert hadde resultatet vært ['fire', 'tre', 'to', 'en']
* */