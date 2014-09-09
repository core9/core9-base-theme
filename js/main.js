// When ready...
window.addEventListener("load", function() {
	// Set a timeout...
	setTimeout(function() {
		// Hide the address bar!
		window.scrollTo(0, 1);
	}, 0);
});

var Core9Plugins = {
	fadeOut : function(id, val) {
		if (isNaN(val)) {
			val = 9;
		}
		document.getElementById(id).style.opacity = '0.' + val;
		// For IE
		document.getElementById(id).style.filter = 'alpha(opacity=' + val
				+ '0)';
		if (val > 0) {
			val--;
			setTimeout('Core9Plugins.fadeOut("' + id + '",' + val + ')', 90);
		} else {
			return;
		}
	},

	fadeIn : function(id, val) {
		if (isNaN(val)) {
			val = 0;
		}
		document.getElementById(id).style.opacity = '0.' + val;
		// For IE
		document.getElementById(id).style.filter = 'alpha(opacity=' + val
				+ '0)';
		if (val < 9) {
			val++;
			setTimeout('Core9Plugins.fadeIn("' + id + '",' + val + ')', 90);
		} else {
			return;
		}
	}
}

var Core9 = {

	body : document.querySelector('body'),
	center : document.querySelector('.center'),
	header : document.querySelector('header'),
	footer : document.querySelector('footer'),

	init : function() {
		Core9.loadCss();
		Core9.setEvents();
		Core9.setStage();
	},

	loadCss : function() {

	},

	setEvents : function() {
		window.onresize = function() {
			Core9.setStage();
		};
	},

	setStage : function() {
		Core9._setBodyBackground();
		Core9._resizeCenter();
	},

	_resizeCenter : function() {
		Core9.center.style.setProperty('top', Core9.header.clientHeight - 85
				+ 'px');
		Core9.center.style.setProperty('min-height', (Core9.body.clientHeight
				- Core9.header.clientHeight - Core9.footer.clientHeight + 135)
				+ 'px');
	},

	_setBodyBackground : function() {
		Core9Plugins.fadeIn('index', 3);
		document.querySelector('body').style.setProperty('background',
				'url("assets/images/mountain-2.jpg") no-repeat bottom left');
		document.querySelector('body').style.setProperty('background-size',
				'100% 100%');
	}

}

Core9.init();