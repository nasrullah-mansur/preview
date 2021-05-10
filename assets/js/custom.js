$(document).ready(function() {
    $(".nav-item a, .demo-btn").click(function(e) {
        e.preventDefault();
        let section = $(this).attr('href');
        $('html, body').animate({
            scrollTop: $(section).offset().top
        }, 1000);
    });


    var typed = new Typed('.typed', {
        strings: [
            "First sentence.", 
            "Second sentence.",
            "Another sentence.",
        ],
        typeSpeed: 50,
        loop: true,
        backDelay: 1000,
      });
});