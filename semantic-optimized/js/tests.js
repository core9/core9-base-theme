/*
 * start test if css animations are available
 */
var elm = document.createElement("detect");
var animation = false, animationstring = 'animation', keyframeprefix = '', domPrefixes = 'Webkit Moz O ms Khtml'
		.split(' '), pfx = '';

if (elm.style.animationName !== undefined) {
	animation = true;
}

if (animation === false) {
	for (var i = 0; i < domPrefixes.length; i++) {
		if (elm.style[domPrefixes[i] + 'AnimationName'] !== undefined) {
			pfx = domPrefixes[i];
			animationstring = pfx + 'Animation';
			keyframeprefix = '-' + pfx.toLowerCase() + '-';
			animation = true;
			break;
		}
	}
}
/*
 * end test if css animations are available
 */

/*
 * start test if css rem are available
 */

(function() {
	var element, size
	element = document.createElement('p')
	element.innerHTML = 'How now brown cow?'
	element.style.cssText = 'font-size: 1.5rem'
	size = element.style.fontSize
	if (size.indexOf('rem') < 0) {
		// ai no rem support
	} else {
		// yup rem support
	}
})()

/*
 * end test if css rem are available
 */