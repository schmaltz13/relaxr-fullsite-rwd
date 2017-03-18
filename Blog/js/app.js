// $('.read-more').click(expand)
// $('.read-less').click(collapse)
//
// function expand(evt) {
//   var $el = $(evt.currentTarget);
//   $el.hide();
//   $el.siblings('.more-content').slideToggle();
// }
//
// function collapse(evt) {
//   var $el = $(evt.currentTarget);
//   var $parent = $el.parent();
//   $parent.slideToggle(function() {
//     $parent.siblings('.read-more').show();
//   });
// }
$( document ).ready(function() {
  $('#menu').click(function() {
    $('.menu-item').toggleClass('active');
    $('.header').toggleClass('tall');
  });
});

var $readmore = $('.read-more')
var $readless = $('.read-less')

$readmore.click(expand)
$readless.click(collapse)

function expand() {
  $(this).hide()
  $(this).siblings('.more-content').slideToggle()
}

function collapse() {
  $(this).parent('.more-content').slideToggle(function () {
    $(this).siblings('.read-more').show()
  })
}
