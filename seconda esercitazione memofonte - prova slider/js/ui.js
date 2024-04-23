const navToggle = document.querySelector('.header__icon');
const navMenu = document.querySelector('.header__menu');
// Ora uso le varibili per rendere dinamica la classe
navToggle.addEventListener('click', () => {
    document.body.classList.toggle('open');
})


// rimuovo su ogni ancora del site-nav la classe open
const navItems = document.querySelectorAll('.site-nav  a');
navItems.forEach((item) => {
    item.addEventListener('click', () => {
        document.body.classList.remove('open');
    });
});














// slide che cambiano nello sfondo
var myIndex = 0;
carousel();

function carousel() {
    var i;
    var x = document.getElementsByClassName("mySlides");
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    myIndex++;
    if (myIndex > x.length) { myIndex = 1 }
    x[myIndex - 1].style.display = "block";
    setTimeout(carousel, 5000); // cambia ogni 2 secondi
}








