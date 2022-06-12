document.querySelector('.btn').onclick = function (landingPpt) {
    var menu = document.querySelector('.menu');
    var btn = document.querySelector('.btn');
    var pptcard = document.querySelector('.cardContainer');
    var footer = document.querySelector('.footerContainer');

    menu.classList.toggle('is-active');
    btn.classList.toggle('is-active');
    pptcard.classList.toggle('is-active');
    footer.classList.toggle('is-active');

    landingPpt.preventDefault();
}