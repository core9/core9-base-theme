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

	init : function() {

		promise.get('wizards/basic/steps.json').then(
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

	}

}


