'use strict'

/*
*
* Løkker, loops er kjekke saker som du kan bruke til mye nyttig
* Jeg viser nå en rekke eksempler med utgangspunkt i lister
* */

var liste = [1, 2, 45, 67, 90, 23, 11]
var listeLengde = liste.length

// Skriv ut alle tall i listen
for (var i=0; i < listeLengde; i++) {
  console.log(liste[i])
}

// Skriv ut alle tall i listen som er større enn 10
for (var i=0; i < listeLengde; i++) {
  if (liste[i] > 10) {
    console.log(liste[i])
  }
}

// Skriv ut alle tall i listen som er mindre enn 10
for (var i=0; i < listeLengde; i++) {
  if (liste[i] < 10) {
    console.log(liste[i])
  }
}

// Skriv ut alle tall i listen som er delelig med 2
for (var i=0; i < listeLengde; i++) {
  if (liste[i] % 2 === 0) {
    console.log(liste[i])
  }
}

// Legg sammen alle tallene i listen
var totalSum = 0

for (var i=0; i < listeLengde; i++) {
  totalSum += liste[i]
}

console.log(totalSum)