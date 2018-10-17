import document from 'document';

document.addEventListener('pagescroll', e => {
	console.log(e.position);
});
document.addEventListener('click', e => {
	console.log(e.screenX);
});

var img = document.getElementById('image');
img.href = 'another-image.jpg';
var demo = document.getElementById('demo');
demo.text = 'Hello World!';
var elements = document.getElementsByClassName('red');
elements.forEach(function(element) {
	element.text = 'Hey Red!';
});
var demo = document.getElementById('demo');
demo.style.fill = 'red';
demo.style.fontSize = 20;
demo.style.fontFamily = 'System-Regular';
var demo = document.getElementById('demo');
demo.x = 42;
demo.y = 90;
var demo = document.getElementById('demo');
demo.width = 348;
demo.height = 250;
var demo = document.getElementById('demo');
demo.layer = 2;
var demo = document.getElementById('demo');
demo.style.display = 'none';
demo.style.display = 'inline';

// Toggle Show/Hide
// @ts-ignore implicit any
function toggle(ele) {
	ele.style.display = ele.style.display === 'inline' ? 'none' : 'inline';
}

toggle(demo); // hidden
toggle(demo); // visible
var demo = document.getElementById('demo');
demo.style.visibility = 'hidden'; // hidden
demo.style.visibility = 'visible'; // visible

var myRect = document.getElementById('myRect');

myRect.onclick = function(e) {
	console.log('click');
};
var mybutton = document.getElementById('mybutton');
mybutton.onactivate = function(e) {
	console.log('click');
};
var mybutton = document.getElementById('mybutton');
mybutton.enabled = false; // disabled
mybutton.enabled = true; // enabled
var myButton = document.getElementById('myButton');

myButton.onmousemove = function(evt) {
	console.log('Mouse moved: ' + evt.screenX + ' ' + evt.screenY);
};
document.onkeypress = function(e) {
	console.log('Key pressed: ' + e.key);
};
