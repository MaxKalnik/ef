$(document).ready(function () {
    var body = $('body');
    body.on('click', '.page-header__toggle-btn', function () {
      event.preventDefault();
      $('.main-nav').removeClass('main-nav--closed');
      $('.main-nav').addClass('main-nav--opened');
    });

    body.on('click', '.page-header__close-btn', function () {
      event.preventDefault();
      $('.main-nav').removeClass('main-nav--opened');
      $('.main-nav').addClass('main-nav--closed');
    });

});
