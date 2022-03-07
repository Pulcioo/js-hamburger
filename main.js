// contenuto
const hamburgerMenu = document.querySelector('.hamburger-menu');
// da mostrare al click dell'icon bars
const bars = document.querySelector('.fa-bars');
// da nascondere al click dell'icon times
const times = document.querySelector('.fa-times');




// applico le singole proprietà all'elemento
bars.addEventListener('click',

    function () {
        hamburgerMenu.style.display = 'block';
    }

)

times.addEventListener('click',

    function () {
        hamburgerMenu.style.display = 'none';
    }

)