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

                Utils.nav('.site-nav', '.site-nav-trigger');
                Utils.dropdown('.dropdown');

            }
        }, // settings

        /**
         * Custom log wrapper function
         */
        log: function(what) {

            Utils.settings.debug && window.console && console.log.apply(console, arguments);

        }, // log

        /**
         * Placeholder shim
         */
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

        }, // placeholder

        /**
         * Toggle site nav using trigger button
         * @param  {string} nav     Navigation selector
         * @param  {string} trigger Trigger button selector
         */
        nav: function(nav, trigger) {

            $(trigger).on('click', function() {
                $(nav).slideToggle();
            });

        }, // nav

        /**
         * Handle dropdowns
         * @param  {string} dropdown Dropdown class
         */
        dropdown: function(dropdown) {

            var $this;

            $(dropdown).each(function() {

                $this = $(this);

                $(this).find('.dropdown__toggle').on('click', function(event) {

                    event.stopPropagation();

                    $this.toggleClass('is-open');

                });

            });

            $(document).on('click', function() {

                $('.is-open').removeClass('is-open');

            });

        } // dropdown
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
