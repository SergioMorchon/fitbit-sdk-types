import document from 'document';

let myRect = document.getElementById('myRect');

myRect.onclick = function (e) {
	console.log('click');
};

myRect.onclick = null;
