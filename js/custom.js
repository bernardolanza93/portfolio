/* HTML document is loaded. DOM is ready.
-------------------------------------------*/
$(function(){

    /* start typed element */
    //http://stackoverflow.com/questions/24874797/select-div-title-text-and-make-array-with-jquery
    var subElementArray = $.map($('.sub-element'), function(el) {
        return $(el).html().trim();
    });
    var fullTypedString = subElementArray.join('<br>');
    $('.sub-element').remove();
    $(".element").typed({
        strings: [fullTypedString],
        typeSpeed: 8,
        contentType: 'html',
        showCursor: false,
        loop: false,
        loopCount: 1,
        callback: function() {
            $(".element").html(fullTypedString);
        }
    });
    /* end typed element */

    /* Smooth scroll and Scroll spy (https://github.com/ChrisWojcik/single-page-nav)    
    ---------------------------------------------------------------------------------*/ 
    $('.templatemo-nav').singlePageNav({
        offset: $(".templatemo-nav").height(),
        filter: ':not(.external)',
        updateHash: false,
        speed: 0
    });

    /* start navigation top js */
    // Keep navbar static to avoid layout jumps on interaction.
    $(".templatemo-nav").removeClass("sticky");
    
    /* Hide mobile menu after clicking on a link
    -----------------------------------------------*/
    $('.navbar-collapse a').click(function(){
        $(".navbar-collapse").collapse('hide');
    });
    /* end navigation top js */

    $('body').bind('touchstart', function() {});

    /* wow
    -----------------*/
	    // Disabled by request: keep only intro typing + button interactions.

	    /* research accordion: single open item with smooth transition */
	    $('.research-panel').hide();
	    $('.research-toggle').on('click', function () {
	        var $toggle = $(this);
	        var targetSelector = $toggle.attr('data-target');
	        var $item = $toggle.closest('.research-item');
	        var $panel = $(targetSelector);
	        var isOpen = $item.hasClass('is-open');

	        $('.research-item').removeClass('is-open');
	        $('.research-toggle').attr('aria-expanded', 'false');
	        $('.research-panel').not($panel).stop(true, true).slideUp(220);

	        if (!isOpen) {
	            $item.addClass('is-open');
	            $toggle.attr('aria-expanded', 'true');
	            $panel.stop(true, true).slideDown(260);
	        } else {
	            $panel.stop(true, true).slideUp(220);
	        }
	    });

	});

/* start preloader */
$(window).load(function(){
	$('.preloader').fadeOut(1000); // set duration in brackets    
});
/* end preloader */
