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
				DevTools.loadModule('cssRefresh', {
					interval: 450
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
			var $dropdown;

			$(dropdown).each(function() {
				$dropdown = $(this);

				$(this).find('.dropdown__toggle').on('click', function(event) {
					event.stopPropagation();
					$dropdown.toggleClass('is-open');
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
	 * @param  {string} target Target selector
	 * @return {object}
	 */
	$.fn.toggleTarget = function(target) {
		$(this).on('click', function(event) {
			event.preventDefault();
			$(target).stop().slideToggle();
		});
		return this;
	};

	/**
	 * Scroll to target(value of href or name) element
	 * @param  {int} speed Scroll spreed in ms
	 * @param  {string} target Optional target element
	 * @return {object}
	 */
	$.fn.softScroll = function(speed, target) {
		$(this).on('click', function(event) {
			event.preventDefault();
			$('html,body').animate({
				scrollTop: $(target || this.hash || '[name=' + this.name.substr(1) + ']').offset().top
			}, speed || 500);
		});
		return this;
	};

	return Public;

})(window.jQuery);

jQuery(document).ready(App.init);