NProgress.start();

$('document').ready(function() {
  var position = document.body.scrollTop,
      menuSpeed = 500;

  // Menu bar animation
  $('.nav__button--close').click(function() {
    $('.nav__wrapper').animate({ right: "-422px" }, menuSpeed);
  });

  $('.nav__button').click(function() { $('.nav__wrapper').animate({
      right: "0"
    }, menuSpeed);
  });

  // Close menu bar on document click
    $('.container').click(function() {
      $('.nav__wrapper').animate({ right: "-422px" }, menuSpeed);
    });

  // Close menu bar on scroll
  $(window).scroll(function() {
    if ($('.nav__wrapper').css('right') === '0px' && document.body.scrollTop != position) {
      $('.nav__wrapper').animate({ right: "-422px" }, menuSpeed);
      position = document.body.scrollTop;
    }
  });

});

$(window).load(function() {
  NProgress.done();
  $('section, figure, .hide__preload, footer').fadeIn();

  window.sr = new scrollReveal({
    enter: 'left',
    move: '30px',
    reset: false,
    delay: 'always',
    easing: 'ease',
    delay: 'once'
  });

  // If URL contains anchor, scroll to position
  var _hash = window.location.hash;
  if ( _hash ) {
    $('html, body').animate({
      scrollTop: $(_hash).offset().top
    }, "fast");
  }

});

$(window).unload(function() {
  NProgress.start();
});
console.log(`
Taking a peak under the hood, aye?
Here's my stack:
  `);
