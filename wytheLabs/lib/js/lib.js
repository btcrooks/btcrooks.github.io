$(document).ready(function() {
  var windowHeight = $(window).height();
  $('.section--hero').css('height', windowHeight - 64);
  $('.section--hero .title').fadeIn('slow');
});
