window.addEventListener("load", function() {
	setTimeout(function() {
		// Hide the address bar on iphone!
		window.scrollTo(0, 1);
	}, 0);
});

var Core9Plugins = {
		menu : {
			init : function(){
				console.log('init menu..');
				this.setEvents();
			},
			setEvents : function(){
				console.log('setting events..');
				var items = document.querySelectorAll('ul.options > li');
				for(var i = 0; i < items.length ; i++){
					console.log(items[i]); // add click handler to show sub menu
				}
			}
		
		}
}

var Core9 = {

	body : document.querySelector('body'),
	center : document.querySelector('.center'),
	header : document.querySelector('header'),
	footer : document.querySelector('footer'),

	init : function() {
		this.setEvents();
		this.setStage();
		Core9Plugins.menu.init();
	},

	setEvents : function() {
		window.onresize = function() {
			Core9.setStage();
		};
	},

	setStage : function() {
		//Core9._setBodyBackground();
		this._resizeCenter();
	},

	_resizeCenter : function() {
		this.center.style.setProperty('min-height', (this.body.clientHeight - this.footer.clientHeight + 85)
				+ 'px');
	},

	_setBodyBackground : function() {
		document.querySelector('body').style.setProperty('background',
				'url("assets/images/mountain-2.jpg") no-repeat bottom left');
		document.querySelector('body').style.setProperty('background-size',
				'100% 100%');
	}

}

Core9.init();