function initSubmenu() {
    // var tool = $('<div id="sub-menu-nav" style="position:fixed;z-index:9999;"></div>');

    // function showMenu(thisMenu) {

    //     if ((($('#cl-wrapper').hasClass('sb-collapsed') && !$('#cl-wrapper').hasClass('sidenav-dark')) ||
    //         ($(window).width() > 755 &&
    //         $(window).width() < 963)) &&
    //         $('ul', thisMenu).length > 0) {
    //         $(thisMenu).removeClass('ocult');

    //         var menu = $('ul', thisMenu);

    //         if (!$('.dropdown-header', thisMenu).length) {
    //             var head = '<li class="dropdown-header">' + $(thisMenu).children().html() + '</li>';
    //             menu.prepend(head);

    //         }

    //         tool.appendTo('body');

    //         var top = ($(thisMenu).offset().top + 8) - $(window).scrollTop();

    //         var left = $(thisMenu).width();

    //         tool.css({
    //             'top': top,
    //             'left': left + 8
    //         });

    //         tool.html('<ul class="sub-menu">' + menu.html() + '</ul>');

    //         tool.show();

    //         menu.css('top', top);

    //     }
    //     else {
    //         tool.hide();

    //     }

    // }

    // $(document).on('mouseenter', '.cl-vnavigation li', function (e) {
    //     showMenu(this, e);

    // });

    // $(document).on('mouseleave', '.cl-vnavigation li', function () {
    //     tool.removeClass('over');

    //     setTimeout(function () {
    //         if (!tool.hasClass('over') && $('.cl-vnavigation li:hover').length <= 0) {
    //             tool.hide();

    //         }

    //     }, 500);

    // });

    // tool.hover(function () {
    //     $(this).addClass('over');

    // },
    //  function () {
    //      $(this).removeClass('over');

    //      tool.fadeOut('fast');

    // });

    // $(document).click(function () {
    //     tool.hide();

    // });

    // $(document).on('touchstart click', function () {
    //     tool.fadeOut('fast');

    // });

    // tool.click(function (e) {
    //     e.stopPropagation();

    // });

    // $('.cl-vnavigation li').click(function (e) {
    //     if ((($('#cl-wrapper').hasClass('sb-collapsed') ||
    //         ($(window).width() > 755 &&
    //         $(window).width() < 963)) &&
    //         $('ul', this).length > 0) &&
    //         ($(window).width() >= 755)) {
    //         showMenu(this, e);

    //         e.stopPropagation();

    //     }

    // });

}