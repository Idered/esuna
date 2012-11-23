/* by @Idered */

var App = App || (function($) {

    var Utils   = {},
        Public  = {};

    Utils = {
        settings: {
            debug: true,
            init: function() {

            $("body").removeClass("no-js");

            Utils.placeholder();

            }
        }, // settings

        log: function(what) {
            if (Utils.settings.debug) {
                console.log(what);
            }
        }, // log

        placeholder: function() {
            if(!('placeholder' in document.createElement('input'))) {
                $('[placeholder]').focus(function() {
                    var input = $(this);
                    if (input.val() == input.attr('placeholder'))
                        input.val('').removeClass('placeholder');
                }).blur(function() {
                    var input = $(this);
                    if (input.val() == '' || input.val() == input.attr('placeholder'))
                        input.val(input.attr('placeholder')).addClass('placeholder');
                }).blur();

                $('[placeholder]').parents('form').submit(function() {
                    $(this).find('[placeholder]').each(function() {
                        var input = $(this);
                        if (input.val() == input.attr('placeholder'))
                            input.val('');
                    })
                });
            }
        } // placeholder
    };
    var _log = Utils.log;


    Public = {
        init: function() {

            _log('main.js initialized.');

            Utils.settings.init();

            Public.fn1();

        }, // init

        fn1: function() {

        }, // fn1

        fn2: function() {

        } // fn2
    };

    return Public;

})(window.jQuery);

jQuery(document).ready(App.init);
