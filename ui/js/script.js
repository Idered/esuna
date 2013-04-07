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
			Config.isDevDomain = $.grep(Config.devDomains, function(domain) {
				return location.host.match(new RegExp(domain + '$', 'gi'));
			});

			if (Config.debug && Config.isDevDomain) {
				/* Load DevTools here */
				// DevTools.loadModule('cssRefresh', { interval: 1000 });
				// DevTools.loadModule('windowSize');
			}
		} //init
	};

	Public = {
		init: function() {
			Utils.init();
			$('.dropdown').dropdown();
			Public.nav();
			Public.sectionHeader();
			Public.codeHelper();
		}, // init

		nav: function() {
			var viewport = $(window);
			$('.js-toggle-nav').toggles('.site-nav', 'is-open');
			$('.site-nav').find('a').on('click', function() {
				if (viewport.innerWidth() < 768) {
					$(this).closest('.nav').toggleClass('is-open');
				}
			});
		},

		sectionHeader: function() {
			var header = $(".section-header"),
				headerHeight = header.height();
				viewport = $(window);

			$('.js-softscroll').find('a').softscroll();

			viewport.on('scroll', function() {
				if (viewport.width() >= 768) {
					header[viewport.scrollTop() > headerHeight ? 'addClass' : 'removeClass']('is-collapsed');
				} else {
					header.removeClass('is-collapsed');
				}
			});
		},

		codeHelper: function() {
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

	return Public;

})(window.jQuery);

jQuery(document).ready(App.init);