

//smooth scrolling
if (window.innerWidth > 768) {
$('a[href*="#"]:not([href="#"]):not([href="#show"]):not([href="#hide"])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
        if (target.length) {
            $('html,body').animate({
                scrollTop: target.offset().top-170
            }, 1000, function() {
                target.focus();
                if (target.is(":focus")) { //checking if the target was focused
                    return false;
                } else {
                    target.attr('tabindex', '-1'); //Adding tabindex for elements not focusable
                    target.focus(); //Setting focus
                }
            });
            return false;
        }
    }
});
}

//barchart sizing
$('.value').each(function() {
	var text = $(this).text();
	$(this).parent().css('width', text);
});

$('.value-vertical').each(function() {
	var text = $(this).text();
	$(this).parent().css('height', text);
});


// $('.block').tooltip();

$(window).scroll(function(){
    $(".arrow").css("opacity", 1 - $(window).scrollTop() / 250); 
  //250 is fade pixels
  });

// //sticky header
// stickybits('.usa-header');
