		function getStep(step, label) {
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
		}

		function getScript(script, step) {
			$LAB.script(script).wait(function() {
				init(step);
			});
		}

		function createWizard(steps) {
			var ul = document.getElementById('tab-ul');
			for ( var step in steps) {
				var script = steps[step].file;
				ul.appendChild(getStep(step, steps[step].label));
				getScript(script, step);
			}
		}

		promise.get('wizards/basic/steps.json').then(
				function(error, text, xhr) {
					if (error) {
						alert('Error ' + xhr.status);
						return;
					}
					createWizard(JSON.parse(text))
				});

		function hideAllDivs() {
			var divs = document.getElementsByClassName('main-container');
			for ( var div in divs) {
				var elem = divs[div];
				if (elem.tagName == 'DIV') {
					elem.style.display = "none";
				}
			}
		}

		document.getElementById('tab-ul')
				.addEventListener(
						"click",
						function(e) {
							if (e.target.tagName != 'A') {
								return;
							}
							hideAllDivs();
							var elem = e.target.parentNode
									.getElementsByTagName('div')[0];
							if (elem !== undefined && elem.tagName == 'DIV') {
								elem.style.display = "block";
							}
						});