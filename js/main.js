// When ready...
window.addEventListener("load",function() {
	// Set a timeout...
	setTimeout(function(){
		// Hide the address bar!
		window.scrollTo(0, 1);
	}, 0);
});



var Core9 = {

	body : document.querySelector('body'),
	center : document.querySelector('.center'),
	header : document.querySelector('header'),
	footer : document.querySelector('footer'),

	init : function() {
		Core9.setEvents();
		Core9.setStage();
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
		Core9.center.style.setProperty('top', Core9.header.clientHeight + 'px');
		Core9.center.style.setProperty('height',
				(Core9.body.clientHeight - Core9.header.clientHeight) + 'px');
	},

	_setBodyBackground : function() {
		document.querySelector('body').style
				.setProperty('background',
						'#020322 url("assets/images/mountain.png") no-repeat bottom left');
		document.querySelector('body').style.setProperty('background-size',
				'100% 100%');
	}

}

Core9.init();