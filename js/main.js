window.addEventListener("load", function() {
	setTimeout(function() {
		// Hide the address bar on iphone!
		window.scrollTo(0, 1);
	}, 0);
});



var Core9Plugins = {
		menu : {
			items : document.querySelectorAll('.metroMenu > ul.options > li'),
			init : function(){
				this.setEvents();
			},
			setEvents : function(){
				for(var i = 0; i < Core9Plugins.menu.items.length ; i++){
					this.setClick(Core9Plugins.menu.items[i]);
				}
			},
			setClick : function(elem){
				elem.onclick=function(){
					var subMenu = this.querySelector('ul.sub');
					if(subMenu == null)return;
					var margin = this.style.marginBottom;
					if(margin == "" || margin == "0px"){
						Core9Plugins.menu.showSubMenu(this, subMenu);
					}else{
						Core9Plugins.menu.hideSubMenu(this, subMenu);
					}
					
				};
			},
			showSubMenu : function(elem, subMenu){
				document.querySelector('ul.options').style.setProperty('height', '600px');
				subMenu.style.setProperty('display', 'block');
				elem.style.setProperty('margin-bottom', subMenu.offsetHeight + 'px');
			},
			hideSubMenu : function(elem, subMenu){
				document.querySelector('ul.options').style.setProperty('height', '400px');
				subMenu.style.setProperty('display', 'none');
				elem.style.setProperty('margin-bottom', '0px');
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