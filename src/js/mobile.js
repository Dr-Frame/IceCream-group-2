$(document).ready(function () {  
    $('#open').on('click', function () {
    $('#menu-mobile').removeClass('is-hiden');
  });
  $('#close').on('click', function () {
    $('#menu-mobile').addClass('is-hiden');
  });

  $('.header__navigation-link').on('click', function () {
    $(this).addClass('header__navigation-link--active');
    $('.header__navigation-link').not(this).removeClass('header__navigation-link--active');
    $('#menu-mobile').addClass('is-hiden');
    $('.back').removeClass('visually-hidden');
  })
  $('.back').on('click', function () {
    $('.back').addClass('visually-hidden');
    $('#home').addClass('header__navigation-link--active');
    $('.header__navigation-link').not('#home').removeClass('header__navigation-link--active');
  });


});

