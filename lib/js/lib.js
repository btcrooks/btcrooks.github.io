NProgress.start();

$('document').ready(function() {
  var position = document.body.scrollTop,
      menuSpeed = 500;

  // Menu bar animation
  $('.nav--button__close').click(function() {
    $('.nav--wrapper').animate({ right: "-422px" }, menuSpeed);
  });
  $('.nav--button').click(function() { $('.nav--wrapper').animate({
      right: "0"
    }, menuSpeed);
  });

  // Close menu bar on document click
    $('.container').click(function() {
      $('.nav--wrapper').animate({ right: "-422px" }, menuSpeed);
    });

  // Close menu bar on scroll
  $(window).scroll(function() {
    if ($('.nav--wrapper').css('right') === '0px' && document.body.scrollTop != position) {
      $('.nav--wrapper').animate({ right: "-422px" }, menuSpeed);
      position = document.body.scrollTop;
    }
  });
});

$(window).load(function() {
  NProgress.done();
}).promise().done(function() {
  window.sr = new scrollReveal({
    enter: 'left',
    move: '30px',
    reset: false,
    delay: 'always',
    easing: 'ease',
    delay: 'once'
  });
});
$(window).unload(function() {
  NProgress.start();
});
