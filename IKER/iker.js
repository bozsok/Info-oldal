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

//Megjelenítem a főoldalt
document.querySelector('.tananyag-page').style.display = 'grid';  ///////ÁTÍRNI, HA VÉGEZTEM .iker-page-re!
//Megjelenítem a TANANYAG oldal 1. óráját
document.querySelector('.ora_04-page').style.display = 'grid';   //////ÁTÍRNI, HA VÉGEZTEM .ora_01-page-re!

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
