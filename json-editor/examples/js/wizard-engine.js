var Wizard = {
		json : {},
	getStep : function(step, label) {
		var li = document.createElement("li");
		var a = document.createElement("a");
		a.setAttribute("href", "#");
		a.appendChild(document.createTextNode(label));
		li.appendChild(a);
		var div = document.createElement("div");
		div.setAttribute("class", "main-container form-container");
		var innerDiv = document.createElement("div");
		innerDiv.setAttribute("id", "editor_holder-" + step);
		div.appendChild(innerDiv);
		var button = document.createElement("button");
		button.setAttribute("id", "submit-" + step);
		button.appendChild(document.createTextNode("Submit"));
		div.appendChild(button);
		li.appendChild(div);
		return li;
	},

	getScript : function(script, step) {
		$LAB.script(script).wait(function() {
			init(step);
		});
	},

	createWizard : function(steps) {
		var ul = document.getElementById('tab-ul');
		for ( var step in steps) {
			var script = steps[step].file;
			ul.appendChild(Wizard.getStep(step, steps[step].label));
			Wizard.getScript(script, step);
		}
		Wizard.hideAllDivs();
		Wizard.showChooseDiv();

		//
		Wizard.setUpChooseOptions(Wizard.json);
		Wizard.activateChooseButtons(Wizard.json);
		//
	},

	showChooseDiv : function() {
		document.getElementById('choose-div').style.display = "block";
	},

	hideAllDivs : function() {
		var divs = document.getElementsByClassName('main-container');
		for ( var div in divs) {
			var elem = divs[div];
			if (elem.tagName == 'DIV') {
				elem.style.display = "none";
			}
		}
	},

	cleanUpOldWidget : function(){
		var root = document.getElementById('tab-ul');
		var lis = root.getElementsByTagName("li");

		for(var i = 0, il = lis.length;i<il;i++) {
			try{
				root.removeChild(lis[i]);
			}catch(e){}

		}
	},

	endsWith : function(str, suffix) {
	    return str.indexOf(suffix, str.length - suffix.length) !== -1;
	},

	activateWidget : function(widget, widgets) {

		console.log('activating : ' + widget);
		var stepFile = widgets[widget].steps;
		if(!Wizard.endsWith(stepFile, ".json")){
			console.log("Oops wrong file : " + stepFile);
			return;
		}

		Wizard.cleanUpOldWidget();
		Wizard.activateChoosePanel();


		promise.get(stepFile).then(
				function(error, text, xhr) {
					if (error) {
						alert('Error ' + xhr.status);
						return;
					}
					Wizard.createWizard(JSON.parse(text))
				});

		document.getElementById('tab-ul')
				.addEventListener(
						"click",
						function(e) {
							if (e.target.tagName != 'A') {
								return;
							}
							Wizard.hideAllDivs();
							var elem = e.target.parentNode
									.getElementsByTagName('div')[0];
							if (elem !== undefined && elem.tagName == 'DIV') {
								elem.style.display = "block";
							}
						});

	},

	activateChooseButtons : function(json){

		var datalist = document.getElementById("data-list");
		var button = document.getElementById("choose-button");

		button.addEventListener("click", function(event) {
			console.log(datalist.value);
			Wizard.activateWidget(datalist.value, json);
		}, false);


		var resetButton = document.getElementById("choose-reset-button");

		resetButton.addEventListener("click", function(event) {
			console.log('resetting');
			Wizard.cleanUpOldWidget();
			Wizard.activateChoosePanel();
		}, false);


	},

	setUpChooseOptions : function(json){
		var options = '';
		for ( var key in json) {
			if (json.hasOwnProperty(key)) {
				options += '<option value="' + key + '" />';
			}
		}
		document.getElementById('widgets').innerHTML = options;
	},

	activateChoosePanel : function(){
		var t = document.querySelector('#widget-chooser');

		var clone = document.importNode(t.content, true);
		var c = document.querySelector('#tab-ul');
		c.appendChild(clone);
	},

	init : function(config) {

		Wizard.activateChoosePanel();

		console.log(config.widgets);
		promise.get(config.widgets).then(function(error, text, xhr) {
			if (error) {
				return;
			}
			var json = JSON.parse(text);
			Wizard.json = json;
			Wizard.setUpChooseOptions(json);
			Wizard.activateChooseButtons(json);
		});



	}

}
