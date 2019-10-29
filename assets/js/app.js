// console.log('Hello World!')

// $("#name").on('click', function (e) {
//     e.preventDefault();
//     $(".nav").hasClass("invisible") ? $(".nav").removeClass("invisible") : $(".nav").addClass("invisible")
//     console.log('Clicked!')
// })
// $("#name").hover(function (e) {
//     e.preventDefault();
//     $(".nav").removeClass("invisible")
// })

var distance = $('#navbar').offset().top,
    $window = $(window);

$window.scroll(function () {
    $('#navbar').toggleClass('fixed-top', $window.scrollTop() >= distance)
});