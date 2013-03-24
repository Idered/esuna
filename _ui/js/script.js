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
			$(dropdown).each(function() {
				var $this = $(this);

				$(this).find('.dropdown__toggle').on('click', function(event) {
					event.stopPropagation();
					$this.toggleClass('is-open');
				});
			});

			$(document).on('click', function() {
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
			Public.codeHelper();
			Public.stickySidebar();
			Public.modifiersToggler();
			$('a[href^=#]').softScroll(600, true);
			$('.header__btn-view').on('click', function(e) {
				_gaq.push(['_trackEvent', 'External Link', e.currentTarget.host, this.href, 0]);
			});
			$('.example').find('input').noon();
		}, // init

		modifiersToggler: function() {

			$('[data-modifiers]').each(function() {
				var $this = $(this),
					base = $this.data('base'),
					modifiers = $this.data('modifiers'),
					i = 0, classes;
				$this.on('click', function() {
					i = i >= modifiers.length - 1  ? 0 : ++i;
					classes = base + ' ';
					classes+= modifiers[i] === '' ? modifiers[i] : base + '--' + modifiers[i];
					$this.attr('class', '').addClass(classes);
					$this.closest('.example').next().find('code').text(classes);
				})
			});

		}, //modifiersToggler

		stickySidebar: function() {
			var sidebar = $(".sidebar"),
				viewport = $(window),
				offset = sidebar.offset().top;

			viewport.on('scroll', function() {
				if (viewport.width() >= 768) {
					sidebar.css({marginTop: viewport.scrollTop() > offset ? viewport.scrollTop() - offset + 10 : 0});
				} else {
					sidebar.attr('style', '');
				}
			});
		}, // sitckySidebar

		codeHelper: function() {

			$('pre').find('code').each(function() {
				$(this).text($(this).html());
			});

			$('.example__code').find('pre').each(function() {
				$(this).addClass('prettyprint');
			});

			prettyPrint();

			$('pre').delegate('code', 'click', function(e) {

				scrollTopValue = $(window).scrollTop();

				var $this  = $(this).parent(),
					$code  = $this.children('code'),
					$clone = $code.clone(),
					text   = $code.text(),
					height = $code.height();

				$code.replaceWith($('<textarea/>'));

				$this.children('textarea').one('blur', function() {
					$(this).replaceWith($clone);
				}).height(height).val(text).select();

				$(window).scrollTop(scrollTopValue);

			});
		}
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

	$.fn.noon = function() {
		$(this).on('click', function(event) {
			event.preventDefault();
		});
		return this;
	};

	return Public;

})(window.jQuery);

jQuery(document).ready(App.init);