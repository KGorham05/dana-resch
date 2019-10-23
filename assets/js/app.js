console.log('Hello World!')

$("#name").on('click', function (e) {
    e.preventDefault();
    $(".nav").hasClass("invisible") ? $(".nav").removeClass("invisible") : $(".nav").addClass("invisible")

})
$("#name").hover(function (e) {
    e.preventDefault();
    $(".nav").removeClass("invisible")
})