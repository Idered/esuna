/* by @Idered */

/* global jQuery, DevTools */
var App = App || (function($) {

	var Utils   = {},
		Public  = {};

	Utils = {
		settings: {
			debug: true,
			devDomains: ['localhost', 'github.dev']
		}, // settings

		init: function() {
			Utils.placeholder();
			Utils.submitShorcut();

			if (Utils.settings.debug && $.inArray(location.host, Utils.settings.devDomains) !== -1) {
				DevTools.loadModule('cssRefresh', {
					interval: 2000
				});
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
			Utils.init();
			Utils.dropdown('.dropdown');
			$('.js-toggle-nav').toggleTarget('.site-nav');
		} // init
	};

	/**
	 * Toggle target element
	 */
	$.fn.toggleTarget = function(target) {
		$(this).on('click', function(event) {
			event.preventDefault();
			$(target).stop().slideToggle();
		});
		return this;
	};

	$.fn.softScroll = function(speed) {
		$(this).on('click', function(event) {
			event.preventDefault();
			$('html,body').animate({
				scrollTop:$(this.hash).length ? $(this.hash) : $('[name=' + this.hash.substr(1) + ']').offset().top
			}, speed || 500);
		});
		return this;
	};

	return Public;

})(window.jQuery);

jQuery(document).ready(App.init);