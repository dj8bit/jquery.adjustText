/*
 * adjustText - jQuery plugin for text size ajuster
 *
 * Copyright (c) 2025 Yamada Labo
 *
 * Licensed under the MIT license:
 *   http://www.opensource.org/licenses/mit-license.php
 *
 * Version:  1.0.0
 *
 */
(function ($, window, document, undefined) {
    const aj = (e) => {
        if ($(e).height() < $(e).find('div').height()) {
            $($(e).find('div')).css('font-size', (parseInt($($(e).find('div')).css('font-size')) * 0.9) + 'px');
            aj(e);
        }
    }
    $.fn.adjustText = function (max = 800, min = 10) {
        $(this).css('width', $(this).width());
        $(this).css('height', $(this).height());
        $(this).append($('<div></div>').append($(this).contents()));
        $(this).find('div').css('display', 'inline-block').css('font-size', max + 'px');
        aj(this);
    };

    $('.adjustText').each((i,e) => {
        $(e).adjustText();
    });
})(jQuery, window, document);
