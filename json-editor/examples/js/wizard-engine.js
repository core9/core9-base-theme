var Wizard = {

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

	activateChooseButton : function(json){
		var datalist = document.getElementById("data-list");
		var button = document.getElementById("choose-button");

		button.addEventListener("click", function(event) {
			console.log(datalist.value);
			Wizard.activateWidget(datalist.value, json);
		}, false);
	},

	init : function(config) {

		console.log(config.widgets);
		promise.get(config.widgets).then(function(error, text, xhr) {
			if (error) {
				// alert('Error ' + xhr.status);
				return;
			}
			var json = JSON.parse(text);
			console.log(json);

			var options = '';
			for ( var key in json) {
				if (json.hasOwnProperty(key)) {
					console.log(key + " -> " + json[key]);
					options += '<option value="' + key + '" />';
				}
			}
			document.getElementById('widgets').innerHTML = options;
			Wizard.activateChooseButton(json);
		});



	}

}
