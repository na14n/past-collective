document.querySelector('.btn').onclick = function (landing) {
    var menu = document.querySelector('.menu');
    var btn = document.querySelector('.btn');
    var link = document.querySelector('div.downBtn');
    var card = document.querySelector('div.cardContainer')
    var ftr = document.querySelector('.footerContainer');

    menu.classList.toggle('is-active');
    btn.classList.toggle('is-active');
    link.classList.toggle('is-active');
    card.classList.toggle('is-active');
    ftr.classList.toggle('is-active');

    landing.preventDefault();
}