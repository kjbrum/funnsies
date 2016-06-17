(function($) {
    // Handle nav menu toggling
    $('.js-toggle-menu').click(function() {
        $('.nav--mobile').toggleClass('open');

        // Change the button text
        if ($(this).text() == 'Menu') {
            $(this).text('Close');
        } else {
            $(this).text('Menu');
        }
    });

    // Handle search overlay
    $('.js-toggle-search').click(function() {
        $('.overlay--search').toggleClass('open');
    });

    // Handle child menu toggling
    $('.has-child-menu a').click(function(e) {
        e.preventDefault();

        if ($(this).next('.child-menu').hasClass('open')) {
            $(this).next('.child-menu').removeClass('open');
        } else {
            // Hide all child menus
            $('.child-menu').removeClass('open');

            // Show the new child menu
            $(this).next('.child-menu').toggleClass('open');
        }
    });
})(jQuery);
