'use strict'

/*
* JavaScript slik det ofte brukes i html
* */

// Hente et element fra nettsiden vha id, f.eks. en div med id ole
// <div id="ole"></div>
var divOle = document.getElementById('ole')

// Skrive noe i elementet som er hentet
divOle.innerHTML = 'Teksten du vil ha inn'

// Hente verdien som er valgt i en nedtrekksmeny
// <select name="lars" id="lars"></select>

var nedtrekksMeny = document.getElementById('lars')
var valgtVerdi = nedtrekksMeny.options[nedtrekksMeny.selectedIndex].value

// Sett valgtVerdi inn i elementet divOle
divOle.innerHTML = valgtVerdi

// Eller bruk valgtVerdi til å hente noe fra en liste
var liste = ['Lykke til', 'med', 'heldagsprøven', 'på', 'fredag']

console.log(liste[valgtVerdi]) //=> 'Lykke til' dersom valgtVerdi var 0
