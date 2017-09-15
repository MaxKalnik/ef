$(document).ready(function () {
    var body = $('body');
    body.on('click', '.page-header__toggle-btn', function () {
      event.preventDefault();
      $('.main-nav').removeClass('main-nav--closed');
      $('.main-nav').addClass('main-nav--opened');
      $('.page-header__top').addClass('page-header__top--opened');
    });

    body.on('click', '.page-header__close-btn', function () {
      event.preventDefault();
      $('.main-nav').removeClass('main-nav--opened');
      $('.main-nav').addClass('main-nav--closed');
      $('.page-header__top').removeClass('page-header__top--opened');
    });


  body.on('click', '.page-header__callback-toggle', function () {
      event.preventDefault();
      $('.page-header__callback-container').addClass('page-header__callback-container--opened');
      $('.page-header__top').addClass('page-header__top--callback');
    });

  body.on('click', '.page-header__callback-close', function () {
      event.preventDefault();
      $('.page-header__callback-container').removeClass('page-header__callback-container--opened');
      $('.page-header__top').removeClass('page-header__top--callback');
    });


  body.on('click', '.search-form__btn--oneway', function () {
      event.preventDefault();
      $('.search-form__btn--roundtrip').removeClass('search-form__btn--active');
      $('.search-form__btn--oneway').addClass('search-form__btn--active');
    });

  body.on('click', '.search-form__btn--roundtrip', function () {
      event.preventDefault();
      $('.search-form__btn--oneway').removeClass('search-form__btn--active');
      $('.search-form__btn--roundtrip').addClass('search-form__btn--active');
    });

  body.on('click', '.page-header__callback-button', function () {
      event.preventDefault();
      $('.popup-fast').addClass('popup-show');
      $('.blur').addClass('blur-visible');
    });

  body.on('click', '.popup__close', function () {
      event.preventDefault();
      $('.blur').removeClass('blur-visible');
      $(this).parent().removeClass('popup-show');
    });

  body.on('click', '.section-top-offers__call-button', function () {
      event.preventDefault();
      $('.popup-fast').addClass('popup-show');
      $('.blur').addClass('blur-visible');
    });

  body.on('click', '.search-form__submit-btn', function () {
      event.preventDefault();
      $('.popup-free').addClass('popup-show');
      $('.blur').addClass('blur-visible');
    });

  body.on('click', '.popup__btn-quote', function () {
      $(this).parent().removeClass('popup-show');
      $('.popup-thank-you').addClass('popup-show');
      $('.blur').addClass('blur-visible');
    });

  body.on('click', '.popup__btn-close', function () {
      event.preventDefault();
      $('.blur').removeClass('blur-visible');
      $('.popup-thank-you').removeClass('popup-show');
    });

  body.on('mousedown', '.section__btn-see', function () {
      $('.section__btn-see').css('background', '#da4422');
    });
  body.on('mouseup', '.section__btn-see', function () {
      $('.section__btn-see').css('background', '#fc5245');
    });

  body.on('mousedown', '.popup__btn-quote', function () {
      $('.popup__btn-quote').css('background', '#da4422');
    });
  body.on('mouseup', '.popup__btn-quote', function () {
      $('.popup__btn-quote').css('background', '#fc5245');
    });

  body.on('mousedown', '.slide', function () {
      $(this).addClass('slide--acive');
    });
  body.on('mouseup', '.slide', function () {
      $(this).removeClass('slide--acive');
    });

  function simpleValidate() {
    body.on('focus', 'input', function () {
      $(this).parent('.input-wrapper').addClass('input-warning');
    });

    body.on('blur', 'input', function () {
      if ($(this).val()) {
        $(this).parent('.input-wrapper').removeClass('input-warning');
      };
    });
  };

  simpleValidate();

  var slideNow = 1;
  var slides = $('.section__slide-list').children();
  var slidesArr = $('.section__slide-item').toArray();
  var slideCount = $('.section__slide-list').children().length;
  var translateWidth = 0;
  var slideInterval = 350000;
  var switchInterval = setInterval(nextSlide, slideInterval);
  var navBtnId = 0;

  function nextSlide() {
    if (slideNow == slideCount || slideNow <= 0 || slideNow > slideCount) {
        $('.section__slide-list').css('transform', 'translate(0, 0)');
        slideNow = 1;
    } else {
        translateWidth = -$('.section__comments').width() * (slideNow);
        $('.section__slide-list').css({
            'transform': 'translate(' + translateWidth + 'px, 0)',
            '-webkit-transform': 'translate(' + translateWidth + 'px, 0)',
            '-ms-transform': 'translate(' + translateWidth + 'px, 0)',
        });
        slideNow++;
    }
    $('.slide__pointer').removeClass('slide__pointer--active');
    $('.slide__pointer').toArray()[slideNow].addClass('.slide__pointer--active');
  };

  function prevSlide() {
    if (slideNow == 1 || slideNow <= 0 || slideNow > slideCount) {
        translateWidth = -$('.section__comments').width() * (slideCount - 1);
        $('.section__slide-list').css({
            'transform': 'translate(' + translateWidth + 'px, 0)',
            '-webkit-transform': 'translate(' + translateWidth + 'px, 0)',
            '-ms-transform': 'translate(' + translateWidth + 'px, 0)',
        });
        slideNow = slideCount;
    } else {
        translateWidth = -$('.section__comments').width() * (slideNow - 2);
        $('.section__slide-list').css({
            'transform': 'translate(' + translateWidth + 'px, 0)',
            '-webkit-transform': 'translate(' + translateWidth + 'px, 0)',
            '-ms-transform': 'translate(' + translateWidth + 'px, 0)',
        });
        slideNow--;
    }
    $('.slide__pointer').removeClass('slide__pointer--active');
    $('.slide__pointer').toArray()[slideNow].addClass('.slide__pointer--active');
  };

  body.on('click', '.slide__right', function () {
      nextSlide();
    });

  body.on('click', '.slide__left', function () {
      prevSlide();
    });


  body.on('click', '.slide__pointer', function () {
    navBtnId = $(this).index() - 1;

    if (navBtnId + 1 != slideNow) {
        translateWidth = -$('.section__comments').width() * (navBtnId);
        $('.section__slide-list').css({
            'transform': 'translate(' + translateWidth + 'px, 0)',
            '-webkit-transform': 'translate(' + translateWidth + 'px, 0)',
            '-ms-transform': 'translate(' + translateWidth + 'px, 0)',
        });
        $('.slide__pointer').removeClass('slide__pointer--active');
        $(this).addClass('slide__pointer--active');
      slideNow = navBtnId + 1;
    }
  });

  $('.section__comments').hover(function(){
        clearInterval(switchInterval);
    },function() {
        switchInterval = setInterval(nextSlide, slideInterval);
    });

  body.on('click', '.trip-switcher__toggle--first', function () {
      $(this).siblings().removeClass('trip-switcher__toggle--active');
      $(this).parent().siblings().removeClass('trip-switcher__btn--active');
      $(this).addClass('trip-switcher__toggle--active');
      $(this).parent().siblings('.trip-switcher__btn--first').addClass('trip-switcher__btn--active');
      $(this).parents('.section').removeClass('section__trip-business');
      $(this).parents('.section').addClass('section__trip-first');
      $(this).parents('.section').find('.section__trip-price--bus').hide('1200');
      $(this).parents('.section').find('.section__trip-price--first').show('1200');
    });

  body.on('click', '.trip-switcher__toggle--business', function () {
      $(this).siblings().removeClass('trip-switcher__toggle--active');
      $(this).parent().siblings().removeClass('trip-switcher__btn--active');
      $(this).addClass('trip-switcher__toggle--active');
      $(this).parent().siblings('.trip-switcher__btn--business').addClass('trip-switcher__btn--active');
      $(this).parents('.section').removeClass('section__trip-first');
      $(this).parents('.section').addClass('section__trip-business');
      $(this).parents('.section').find('.section__trip-price--first').hide('1200');
      $(this).parents('.section').find('.section__trip-price--bus').show('1200');
    });

  body.on('click', '.trip-switcher__btn--first', function () {
      $(this).siblings().removeClass('trip-switcher__btn--active');
      $(this).siblings('.trip-switcher__toggle-btn').children('.trip-switcher__toggle').removeClass('trip-switcher__toggle--active');
      $(this).addClass('trip-switcher__btn--active');
      $(this).siblings('.trip-switcher__toggle-btn').children('.trip-switcher__toggle--first').addClass('trip-switcher__toggle--active');
      $(this).parents('.section').removeClass('section__trip-business');
      $(this).parents('.section').addClass('section__trip-first');
      $(this).parents('.section').find('.section__trip-price--bus').hide('1500');
      $(this).parents('.section').find('.section__trip-price--first').show('1500');
    });

  body.on('click', '.trip-switcher__btn--business', function () {
      $(this).siblings().removeClass('trip-switcher__btn--active');
      $(this).siblings('.trip-switcher__toggle-btn').children('.trip-switcher__toggle').removeClass('trip-switcher__toggle--active');
      $(this).addClass('trip-switcher__btn--active');
      $(this).siblings('.trip-switcher__toggle-btn').children('.trip-switcher__toggle--business').addClass('trip-switcher__toggle--active');
      $(this).parents('.section').removeClass('section__trip-first');
      $(this).parents('.section').addClass('section__trip-business');
      $(this).parents('.section').find('.section__trip-price--first').hide('1500');
      $(this).parents('.section').find('.section__trip-price--bus').show('1500');
    });

  body.on('click', '.region-switcher__link', function () {
      $('.region-switcher__link').removeClass('region-switcher__link--active');
      $(this).addClass('region-switcher__link--active');
    });

  body.on('click', '.region-switcher__item', function () {
      $('.region-switcher__list').toggleClass('region-switcher__list--opened');
    });

  body.on('click', '.region-switcher__link', function(event) {
      event.preventDefault();
      var scroll_el = $(this).attr('href');
      $('html, body').animate({scrollTop:$(scroll_el).position().top}, 2000);
    });
});
