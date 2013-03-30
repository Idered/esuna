/**
 * @author Idered
 * @url    idered.pl
 */

/* global jQuery, DevTools */
var App = App || (function($) {

	var Config = {},
		Utils  = {},
		Public = {};

	Config = {
		debug: true,
		devDomains: ['localhost', '.dev']
	};

	Utils = {

		init: function() {
			Utils.placeholder();
			Utils.submitShorcut();

			Config.isDevDomain = $.grep(Config.devDomains, function(domain) {
				return location.host.match(new RegExp(domain + '$', 'gi'));
			});

			if (Config.debug && Config.isDevDomain) {
				/* Load DevTools here */
				// DevTools.loadModule('cssRefresh', { interval: 1000 });
				// DevTools.loadModule('windowSize');
			}
		}, //init

		/**
		 * Placeholder shim
		 */
		placeholder: function() {
			if(!('placeholder' in document.createElement('input'))) {
				$('[placeholder]').focus(function() {
					var input = $(this);
					if (input.val() === input.attr('placeholder')) {
						input.val('').removeClass('placeholder');
					}
				}).blur(function() {
					var input = $(this);
					if (input.val() === '' || input.val() === input.attr('placeholder')) {
						input.val(input.attr('placeholder')).addClass('placeholder');
					}
				}).blur();
				$('[placeholder]').parents('form').submit(function() {
					$(this).find('[placeholder]').each(function() {
						var input = $(this);
						if (input.val() === input.attr('placeholder')) {
							input.val('');
						}
					});
				});
			}
		}, // placeholder

		/**
		 * Submit forms using Ctlr + Enter shorcut
		 */
		submitShorcut: function() {
			var isCtrl = false;

			$('textarea, input').keyup(function(key) {
				if (key.which === 17) { isCtrl = false; }
			}).keydown(function(key) {
				if (key.which === 17) { isCtrl = true; }
				if (key.which === 13 && isCtrl === true) {
					$(this).closest('form').submit();
					return false;
				}
			});
		} // submitShortcut
	};

	Public = {
		init: function() {
			Utils.init();
			$('.dropdown').dropdown();
			$('.js-toggle-nav').toggles('.site-nav');
		} // init
	};

	return Public;

})(window.jQuery);

jQuery(document).ready(App.init);