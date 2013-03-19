/* by @Idered */

/* global jQuery, DEVTools */
var App = App || (function($) {

	var Utils   = {},
		Public  = {};

	Utils = {
		settings: {
			debug: true,
			devDomain: 'xhtmlized.dev',
			init: function() {
				Utils.placeholder();
				Utils.submitShorcut();

				if (Utils.settings.debug && Utils.settings.devDomain === location.host) {
					DEVTools.windowSize();
					DEVTools.CSSRefresher.init();
				}
			}
		}, // settings

		/**
		 * Placeholder shim
		 */
		placeholder: function() {

			if(!('placeholder' in document.createElement('input'))) {
				$('[placeholder]').focus(function() {
					var input = $(this);
					if (input.val() === input.attr('placeholder')) { input.val('').removeClass('placeholder'); }
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
		 * Toggle site nav using trigger button
		 * @param  {string} nav
		 * @param  {string} trigger
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
		}, // dropdown

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

			Utils.settings.init();

			Utils.nav('.site-nav', '.js-toggle-nav');

		} // init
	};

	return Public;

})(window.jQuery);

jQuery(document).ready(App.init);