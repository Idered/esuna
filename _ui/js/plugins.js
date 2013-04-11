/*! DevTools | MIT License | by Idered */
var DevTools = {
	loadModule: function(module, options) {
		options = $.extend({
			interval: 500,
			idle: 20
		}, options);
		if (this.modules[module]) {
			this.modules[module].init(options);
		}
	}, // init

	modules: {
		cssRefresh: {
			init: function(options) {
				var styleSheets = $('link[rel=stylesheet]'),
					cssRefresh = this,
					lastModified, i;

				styleSheets = $.map(styleSheets, function(styleSheet) {
					if (styleSheet.href.indexOf(window.location.host) !== -1) {
						styleSheet.lastModified = cssRefresh.getFiletime(styleSheet.href);
						styleSheet.requestsNum = 0;
						return styleSheet;
					}
					return null;
				});

				styleSheets = $(styleSheets);

				var timer = setInterval(function() {
					styleSheets.each(function() {
						if (this.requestsNum < 20 || !(this.requestsNum % options.idle)) {
							lastModified = cssRefresh.getFiletime(this.href);
							if (lastModified != this.lastModified) {
								this.requestsNum = 0;
								this.lastModified = lastModified;
								this.href = this.href.replace(/\.css.*/, '.css?reload=' + new Date().getTime());
							}
						}
						this.requestsNum++;
					});
				}, options.interval);
			}, // init

			getFiletime: function(file) {
				var req = new XMLHttpRequest();
				req.open('GET', file, false);
				req.send(null);
				return req.getResponseHeader('Last-Modified');
			} // getFiletime
		}, // cssRefresh

		windowSize: {
			init: function() {
				var viewport = $(window),
					debug = $('<div id="debug-window"/>').css({
						borderRadius: '3px 0 0 0',
						backgroundColor: '#333',
						font: '16px/1.5 Arial',
						padding: '.5em 1em',
						textAlign: 'right',
						position: 'fixed',
						color: '#fff',
						bottom: 0,
						right: 0
					}).appendTo('body');

				viewport.on('resize', function() {
					debug.text(viewport.innerWidth() + 'x' + viewport.innerHeight() + 'px');
				}).trigger('resize');
			}
		} // windowSize
	} // modules
} // DevTools;

/**
 * Toggle target element
 * @param  {string} target Target selector
 * @param  {string} klass  Toggle class instead of slide
 * @return {object}
 */
$.fn.toggles = function(target, klass) {
	$(this).on('click', function(event) {
		event.preventDefault();
		if (klass) {
			$(target).toggleClass(klass);
		} else {
			$(target).stop().slideToggle();
		}
	});
	return this;
};

/**
 * Scroll to target(value of href or name) element
 * @param  {int} speed Scroll speed in ms
 * @return {object}
 */
$.fn.scrollsTo = function(speed) {
	$(this).on('click', function(event) {
		event.preventDefault();
		$('html,body').animate({
			scrollTop: $(this.hash).length ? $(this.hash).offset().top : $('[name=' + this.hash.substr(1) + ']').offset().top
		}, speed || 500);
	});
	return this;
};

/**
 * Handle dropdowns
 * @return {object}
 */
$.fn.dropdown = function() {
	$(this).each(function() {
		var $dropdown = $(this);
		$dropdown.find('.dropdown__toggle').on('click', function(event) {
			event.stopPropagation();
			$dropdown.toggleClass('is-open');

			$(document).one('click', function() {
				$('.dropdown.is-open').removeClass('is-open');
			});
		});
	});

	return this;
}; // dropdown

/*! Placeholder shim */
(function($){if(!('placeholder'in document.createElement('input'))){$('[placeholder]').focus(function(){var input=$(this);if(input.val()===input.attr('placeholder')){input.val('').removeClass('placeholder');}}).blur(function(){var input=$(this);if(input.val()===''||input.val()===input.attr('placeholder')){input.val(input.attr('placeholder')).addClass('placeholder');}}).blur();$('[placeholder]').parents('form').submit(function(){$(this).find('[placeholder]').each(function(){var input=$(this);if(input.val()===input.attr('placeholder')){input.val('');}});});}})(jQuery);

/*! Submit forms using Ctlr + Enter shorcut */
(function($){var isCtrl=false;$('textarea, input').keyup(function(key){if(key.which===17){isCtrl=false;}}).keydown(function(key){if(key.which===17){isCtrl=true;}if(key.which===13&&isCtrl===true){$(this).closest('form').submit();return false;}});})(jQuery);

/*! Respond.js v1.1.0: min/max-width media query polyfill. (c) Scott Jehl. MIT/GPLv2 Lic. j.mp/respondjs  */
(function(a){"use strict";function x(){u(!0)}var b={};if(a.respond=b,b.update=function(){},b.mediaQueriesSupported=a.matchMedia&&a.matchMedia("only all").matches,!b.mediaQueriesSupported){var q,r,t,c=a.document,d=c.documentElement,e=[],f=[],g=[],h={},i=30,j=c.getElementsByTagName("head")[0]||d,k=c.getElementsByTagName("base")[0],l=j.getElementsByTagName("link"),m=[],n=function(){for(var b=0;l.length>b;b++){var c=l[b],d=c.href,e=c.media,f=c.rel&&"stylesheet"===c.rel.toLowerCase();d&&f&&!h[d]&&(c.styleSheet&&c.styleSheet.rawCssText?(p(c.styleSheet.rawCssText,d,e),h[d]=!0):(!/^([a-zA-Z:]*\/\/)/.test(d)&&!k||d.replace(RegExp.$1,"").split("/")[0]===a.location.host)&&m.push({href:d,media:e}))}o()},o=function(){if(m.length){var a=m.shift();v(a.href,function(b){p(b,a.href,a.media),h[a.href]=!0,setTimeout(function(){o()},0)})}},p=function(a,b,c){var d=a.match(/@media[^\{]+\{([^\{\}]*\{[^\}\{]*\})+/gi),g=d&&d.length||0;b=b.substring(0,b.lastIndexOf("/"));var h=function(a){return a.replace(/(url\()['"]?([^\/\)'"][^:\)'"]+)['"]?(\))/g,"$1"+b+"$2$3")},i=!g&&c;b.length&&(b+="/"),i&&(g=1);for(var j=0;g>j;j++){var k,l,m,n;i?(k=c,f.push(h(a))):(k=d[j].match(/@media *([^\{]+)\{([\S\s]+?)$/)&&RegExp.$1,f.push(RegExp.$2&&h(RegExp.$2))),m=k.split(","),n=m.length;for(var o=0;n>o;o++)l=m[o],e.push({media:l.split("(")[0].match(/(only\s+)?([a-zA-Z]+)\s?/)&&RegExp.$2||"all",rules:f.length-1,hasquery:l.indexOf("(")>-1,minw:l.match(/\(min\-width:[\s]*([\s]*[0-9\.]+)(px|em)[\s]*\)/)&&parseFloat(RegExp.$1)+(RegExp.$2||""),maxw:l.match(/\(max\-width:[\s]*([\s]*[0-9\.]+)(px|em)[\s]*\)/)&&parseFloat(RegExp.$1)+(RegExp.$2||"")})}u()},s=function(){var a,b=c.createElement("div"),e=c.body,f=!1;return b.style.cssText="position:absolute;font-size:1em;width:1em",e||(e=f=c.createElement("body"),e.style.background="none"),e.appendChild(b),d.insertBefore(e,d.firstChild),a=b.offsetWidth,f?d.removeChild(e):e.removeChild(b),a=t=parseFloat(a)},u=function(a){var b="clientWidth",h=d[b],k="CSS1Compat"===c.compatMode&&h||c.body[b]||h,m={},n=l[l.length-1],o=(new Date).getTime();if(a&&q&&i>o-q)return clearTimeout(r),r=setTimeout(u,i),void 0;q=o;for(var p in e)if(e.hasOwnProperty(p)){var v=e[p],w=v.minw,x=v.maxw,y=null===w,z=null===x,A="em";w&&(w=parseFloat(w)*(w.indexOf(A)>-1?t||s():1)),x&&(x=parseFloat(x)*(x.indexOf(A)>-1?t||s():1)),v.hasquery&&(y&&z||!(y||k>=w)||!(z||x>=k))||(m[v.media]||(m[v.media]=[]),m[v.media].push(f[v.rules]))}for(var B in g)g.hasOwnProperty(B)&&g[B]&&g[B].parentNode===j&&j.removeChild(g[B]);for(var C in m)if(m.hasOwnProperty(C)){var D=c.createElement("style"),E=m[C].join("\n");D.type="text/css",D.media=C,j.insertBefore(D,n.nextSibling),D.styleSheet?D.styleSheet.cssText=E:D.appendChild(c.createTextNode(E)),g.push(D)}},v=function(a,b){var c=w();c&&(c.open("GET",a,!0),c.onreadystatechange=function(){4!==c.readyState||200!==c.status&&304!==c.status||b(c.responseText)},4!==c.readyState&&c.send(null))},w=function(){var b=!1;try{b=new a.XMLHttpRequest}catch(c){b=new a.ActiveXObject("Microsoft.XMLHTTP")}return function(){return b}}();n(),b.update=n,a.addEventListener?a.addEventListener("resize",x,!1):a.attachEvent&&a.attachEvent("onresize",x)}})(this);
