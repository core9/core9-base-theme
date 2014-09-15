window.addEventListener("load", function() {
	setTimeout(function() {
		// Hide the address bar on iphone!
		window.scrollTo(0, 1);
	}, 0);
});



var Core9Plugins = {
		menu : {
			init : function(){
				this.setEvents();
			},
			setEvents : function(){
				var items = document.querySelectorAll('ul.options > li');
				for(var i = 0; i < items.length ; i++){
					this.setClick(items[i]);
				}
			},
			setClick : function(elem){
				elem.onclick=function(){
					var sub = this.querySelector('ul.sub');
					console.log(sub);
					var margin = this.style.marginBottom;
					console.log(margin);
					if(margin == "" || margin == "0px"){
						this.style.setProperty('margin-bottom', '200px');
					}else{
						this.style.setProperty('margin-bottom', '0px');
					}
					
				};
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