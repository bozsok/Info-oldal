/************************************************
Scrollozó nyilacska a képernyő jobb alsó sarkában
*************************************************/
const visszaNyil = document.getElementById('visszaNyil');
const scrollozas = () => {
    let elmozdulasPixelben = window.scrollY;

    if (elmozdulasPixelben > 20) {
        visszaNyil.style.cssText = "opacity: 1; visibility: visible";
    } else {
        visszaNyil.style.cssText = "opacity: 0; visibility: hidden";
    }
}
window.addEventListener("scroll", scrollozas);

//Eltüntetem az összes page osztályú oldalt
const pageUres = document.querySelectorAll('.page');
for (let i = 0; i < pageUres.length; i++) {
    pageUres[i].style.display = 'none';
}
//Eltüntetem az összes tananyag osztályú oldalt a TANANYAG oldalról
const tananyagUres = document.querySelectorAll('.tananyag');
for (let i = 0; i < tananyagUres.length; i++) {
    tananyagUres[i].style.display = 'none';
}

//Eltüntetem az összes feladatok osztályú oldalt a TANANYAG oldalról
const feladatokUres = document.querySelectorAll('.feladatok');
for (let i = 0; i < feladatokUres.length; i++) {
    feladatokUres[i].style.display = 'none';
}

//Megjelenítem a főoldalt
document.querySelector('.iker-page').style.display = 'grid';  ///////ÁTÍRNI, HA VÉGEZTEM .iker-page-re!
//Megjelenítem a TANANYAG oldal 1. óráját
document.querySelector('.ora_01-page').style.display = 'grid';   //////ÁTÍRNI, HA VÉGEZTEM .ora_01-page-re!
//Megjelenítem a FEALADATOK oldal 1. napját
document.querySelector('.nap_01-page').style.display = 'grid';   //////ÁTÍRNI, HA VÉGEZTEM .ora_01-page-re!

//Kigyűjtöm az IKER linkekhez tartozó oldalakat és a linkre kattintva betöltöm azokat
const pageLink = document.querySelectorAll('.page-link');
for (let i = 0; i < pageLink.length; i++) {
    pageLink[i].addEventListener('click', function (event) {
        event.preventDefault(); //a kattintásra nem történik semmi ezzel a függvénnyel
        const name = this.dataset.page;
        const pageUres = document.querySelectorAll('.page');
        for (let i = 0; i < pageUres.length; i++) {
            pageUres[i].style.display = 'none';
        }
        document.querySelector('.' + name + '-page').style.display = 'grid';
    });
}

//Kigyűjtöm a TANANYAG linkekhez tartozó oldalakat és a linkre kattintva betöltöm azokat
const tananyagLink = document.querySelectorAll('.tananyag-link');
for (let i = 0; i < tananyagLink.length; i++) {    
    tananyagLink[i].addEventListener('click', function (event) {        
        event.preventDefault(); //a kattintásra nem történik semmi ezzel a függvénnyel
        const name = this.dataset.page;
        const tananyagUres = document.querySelectorAll('.tananyag');
        for (let i = 0; i < tananyagUres.length; i++) {
            tananyagUres[i].style.display = 'none';            
        }
        document.querySelector('.' + name + '-page').style.display = 'grid';
    });
}

//Kigyűjtöm a FELADATOK linkekhez tartozó oldalakat és a linkre kattintva betöltöm azokat
const feladatokLink = document.querySelectorAll('.feladatok-link');
for (let i = 0; i < feladatokLink.length; i++) {    
    feladatokLink[i].addEventListener('click', function (event) {        
        event.preventDefault(); //a kattintásra nem történik semmi ezzel a függvénnyel
        const name = this.dataset.page;
        const feladatokUres = document.querySelectorAll('.feladatok');
        for (let i = 0; i < feladatokUres.length; i++) {
            feladatokUres[i].style.display = 'none';            
        }
        document.querySelector('.' + name + '-page').style.display = 'grid';
    });
}

//Accordion panel a TANANYAGOK oldalhoz
var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.display === "flex") {
      panel.style.display = "none";
    } else {
      panel.style.display = "flex";
    }
  });
}


