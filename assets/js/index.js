
//sticky header
stickybits('.usa-header');


//smooth scrolling
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

//barchart animation
$('.value').each(function() {
	var text = $(this).text();
	$(this).parent().css('width', text);
});

$('.block').tooltip();