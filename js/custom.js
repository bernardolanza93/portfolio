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

});

/* start preloader */
$(window).load(function(){
	$('.preloader').fadeOut(1000); // set duration in brackets    
});
/* end preloader */
