import document from 'document';

let myPopup = document.getElementById('my-popup') as GraphicsElement;

// Show the popup
myPopup.style.display = 'inline';

let btnLeft = myPopup.getElementById('btnLeft');
let btnRight = myPopup.getElementById('btnRight');

btnLeft.onclick = function (evt) {
	console.log('LATER');
	myPopup.style.display = 'none';
};

btnRight.onclick = function (evt) {
	console.log('START');
	myPopup.style.display = 'none';
};
