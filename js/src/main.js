(function($) {
    $('.js-toggle-menu').click(function() {
        $('.nav--mobile').toggleClass('open');

        console.log($(this).text());
        if ($(this).text() == 'Menu') {
            $(this).text('Close');
        } else {
            $(this).text('Menu');
        }
    });
})(jQuery);
