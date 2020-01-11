//Eltüntetem az összes page osztályú oldalt
const pageUres = document.querySelectorAll('.page');
for (let i = 0; i < pageUres.length; i++) {
    pageUres[i].style.display = 'none';
}
//Megjelenítem a főoldalt
document.querySelector('.home-page').style.display = 'grid';

//Kigyűjtöm a linkekhez tartozó oldalakat és a linkre kattintva betöltöm azokat
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
